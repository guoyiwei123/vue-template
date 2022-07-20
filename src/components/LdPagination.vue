<script setup>
import { computed } from 'vue';
import iconfont from '../script/iconfont.js';
import LdIcon from '~components/LdIcon.vue';
const props = defineProps({
    pageIndex: {
        type: [Number, String],
        default: 1
    },
    pageTotal: {
        type: [Number, String],
        default: 1
    },
    // 链接状态
    link: {
        type: Boolean,
        default: false
    }
});
// 项数据
const pageItems = computed(() => {
    const pageIndex = parseInt(props.pageIndex);
    const pageTotal = parseInt(props.pageTotal);
    const list = [];
    // 判断总页码是否在5以内
    if (pageTotal <= 5) {
        for (let i = 1; i <= pageTotal; i++) {
            res.push({
                link: '',
                text: i,
                type: 'normal'
            });
        }
    } else {
        if (pageIndex <= 3) {
            for (let i = 1; i < 5; i++) {
                list.push({
                    link: '',
                    text: i,
                    type: 'normal'
                });
            }
            list.push({
                link: '',
                text: '...',
                type: 'more'
            }, {
                link: '',
                text: pageTotal,
                type: 'normal'
            });
        } else if (pageIndex <= pageTotal - 3) {
            list.push({
                link: '',
                text: '1',
                type: 'normal'
            }, {
                link: '',
                text: '...',
                type: 'more'
            });
            for (let i = -1; i < 2; i++) {
                list.push({
                    link: '',
                    text: pageIndex + i,
                    type: 'normal'
                });
            }
            list.push({
                link: '',
                text: '...',
                type: 'more'
            }, {
                link: '',
                text: pageTotal,
                type: 'normal'
            });
        }else{
            list.push({
                link: '',
                text: '1',
                type: 'normal'
            },{
                link: '',
                text: '...',
                type: 'more'
            });
            for(let i=-3;i<1;i++){
                list.push({
                    link: '',
                    text: pageTotal + i,
                    type: 'more'
                });
            }
        }
    }
    return list;
});
// 设置class列表
const setClassList = (item) => {
    const list = [];
    item.text == props.pageIndex && list.push('active');
    item.type === 'more' && list.push('more');
    return list;
};
// 上一页按钮样式
const preBtnClass = computed(() => {
    const list = [];
    props.pageIndex == 1 && list.push('none');
    return list;
});
// 下一页按钮样式
const nextBtnClass = computed(() => {
    const list = [];
    props.pageIndex == props.pageTotal && list.push('none');
    return list;
});
const emit = defineEmits(['change', 'linkFormat']);
// 页码更变事件
const onChange = (index, type) => {
    // 执行更变事件
    emit('change', index);
    // 判断是否为非绑定事件，且开启链接模式
    if(type != 'event' && props.link){
        return emit('linkFormat', index) || '';
    }
};
</script>
<template>
	<ul class="ld-pagination">
		<li
			class="item prev"
			:class="preBtnClass"
		>
			<ld-icon name="prev" />
		</li>
		<li
			v-for="item in pageItems"
			:key="item.text"
			class="item"
			:class="setClassList(item)"
			@click="onChange(item.text, 'event')"
		>
			<template v-if="link">
				<router-link :to="onChange(item.text)">
					{{ item.text }}
				</router-link>
			</template>
			<template v-else>
				{{ item.text }}
			</template>
		</li>
		<li
			class="item next"
			:class="nextBtnClass"
		>
			<!-- <ld-icon name="next" /> -->
		</li>
	</ul>
</template>
<style lang="scss">
@import "../scss/mixin.scss";
.ld-pagination{
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0;
    padding: 0;
    .item{
        width: 28px;
        height: 28px;
        line-height: 28px;
        border-radius: 6px;
        text-align: center;
        border: 1px solid #e8e8f0;
        color: #9999a3;
        cursor: pointer;
        @include clear-default-touch-style;
        a{
            color: inherit;
            text-decoration: none;
        }
        &:not(&:first-child){
            margin-left: 10px;
        }
        &:hover{
            border-color: #2886f0;
            color: #2886f0;
        }
        &.active{
            background-color: #2886f0;
            border-color: #2886f0;
            color: #fff;
            &:hover{
                color: #fff;
            }
        }
        &.more{
            border-color: transparent;
            pointer-events: none;
        }
        &.none{
            background-color: #f6f6f6;
            border-color: #f6f6f6;
            pointer-events: none;
            cursor: not-allowed;
            &.prev, &.next{
                &::after{
                    border-left-color: #aaa;
                    border-bottom-color: #aaa;
                }
            }
        }
    }
}


</style>