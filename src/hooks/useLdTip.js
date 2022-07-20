import {h, render, onBeforeUnmount} from 'vue';
import LdTip from '~components/LdTip';
export default function(){
    let vNode = null;
    let container = null;
    // 清除函数
    const clear = () => {
        // 判断容器是否存在
        if(container){
            render(null, container);
            container.remove();
        }
    };
    onBeforeUnmount(() => {
        clear();
    });
    return (message, delay) => {
        // 父节点
        const parentEl = document.body;
        // 容器节点
        if(!container){
            container = document.createElement('div');
        }
        // 判断当前是否有节点, 有则清除
        vNode && clear();
        vNode = h(LdTip, {
            message, delay, onClose: () => {
                clear();
            }
        });
        render(vNode, container);
        parentEl.appendChild(container);
    };
}