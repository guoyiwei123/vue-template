import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import { createPinia } from 'pinia';
import routes from '~config/router';
import App from './App';
import '~styles/index.scss';
const router = createRouter({
    history: createWebHistory(),
    routes
});
createApp(App)
    .use(createPinia())
    .use({
        install(app){
            // 媒体节点列表
            const mediaDOMList = [];
            const removeItem = (config) => {
                const {el} = config;
                // 不存在则移除该项
                const index = mediaDOMList.findIndex(item => item === config);
                index != -1 && mediaDOMList.splice(index, 1);
                el._mediaLazyConfig = undefined;
            };
            app.directive('media-lazy', {
                created(el, binding){
                    // 判断绑定的值是否存在
                    if(binding.value){
                        // 挂载配置
                        const config = {
                            el,
                            src: binding.value, // src属性值
                            mounted: false, // 挂载状态
                        };
                        el._mediaLazyConfig = config;
                        // 将配置加入到队列中
                        mediaDOMList.push(config);
                    }
                },
                mounted(el){
                    if(el._mediaLazyConfig){
                        el.setAttribute('loaded-status', 'loading');
                        // 绑定加载相关事件
                        el.onload = () => {
                            el.setAttribute('loaded-status', 'loaded');
                        };
                        el.onerror = () => {
                            el.setAttribute('loaded-status', 'error');
                        };
                        el._mediaLazyConfig.mounted = true;
                    }
                },
                beforeUpdate(el, binding){
                    // 判断绑定的值是否存在
                    if(binding.value){
                        el._mediaLazyConfig.mounted = false;
                        el._mediaLazyConfig.src = binding.value;
                    }else{
                        removeItem(el._mediaLazyConfig);
                    }
                },
                updated(el){
                    // 判断属性是否存在
                    if(el._mediaLazyConfig){
                        el._mediaLazyConfig.mounted = true;
                    }
                },
                beforeUnmount(el){
                    removeItem(el._mediaLazyConfig);
                    // 删除该属性
                }
            });
            const scrollEvent = () => {
                // 获取视口高度
                const windowHeight = window.innerHeight;
                mediaDOMList.forEach(item => {
                    const {mounted, el, src} = item;
                    // 判断节点是否已挂载
                    if(!mounted){
                        return ;
                    }
                    const {top} = el.getBoundingClientRect();
                    // 判断是否在可视范围内
                    if(top >=0 && top <= windowHeight){
                        el.setAttribute('src', src);
                        removeItem(item);
                    }
    
                });
            };
            app.mixin({
                mounted(){
                    scrollEvent();
                    // 绑定事件
                    window.addEventListener('scroll', scrollEvent);
                },
                beforeUnmount(){
                    // 解绑事件
                    window.removeEventListener('scroll', scrollEvent);
                },
                
            });
        }
    })
    .use(router)
    .mount('#app');
