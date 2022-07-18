<script setup>
import {computed} from 'vue';
import TransitionContainer from './TransitionContainer.vue';
const props = defineProps({
    // 标题
    title: {
        type: String,
        default: ''
    },
    // 对话框关闭/隐藏状态
    modelValue: {
        type: Boolean,
        default: false
    },
    beforeClose: {
        type: Function,
        default: null
    },
    // 方位
    position: {
        type: String,
        default: 'bottom'
    }
});
const emit = defineEmits([
    'update:modelValue'
]);
// 状态更变事件
const onChange = (value) => {
    emit('update:modelValue', value);
};
const className = computed(() => {
    const {position} = props;
    return `ld-drawer ${position}`;
});
const transitonName = computed(() => {
    const {position} = props;
    return `drawer-${position}`;
});
</script>
<template>
	<transition-container
		:model="modelValue"
		:class="className"
		:transition-name="transitonName"
		@change="onChange"
	/>
</template>
<style lang="scss">
.ld-drawer{
	.container{
		position: absolute;
		background-color: #fff;
	}
    &.top, &.bottom{
        .container{
            width: 100%;
		    height: 50px;
        }
    }
    &.top{
        .container{
            top: 0;
        }
    }
    &.bottom{
        .container{
            bottom: 0;
        }
    }
    &.left, &.right{
        .container{
            width: 50px;
		    height: 100%;
        }
    }
    &.left{
        .container{
            left: 0;
        }
    }
    &.right{
        .container{
            right: 0;
        }
    }
    .drawer-top-enter-active,
    .drawer-top-leave-active,
	.drawer-bottom-enter-active,
    .drawer-bottom-leave-active,
    .drawer-left-enter-active,
    .drawer-left-leave-active,
    .drawer-right-enter-active,
    .drawer-right-leave-active{
        transition: all 0.3s ease;
    }
    .drawer-top-enter-from,
    .drawer-top-leave-to {
        transform: translateY(-100%);
    }
    .drawer-bottom-enter-from,
    .drawer-bottom-leave-to {
        transform: translateY(100%);
    }
    .drawer-left-enter-from,
    .drawer-left-leave-to {
        transform: translateX(-100%);
    }
    .drawer-right-enter-from,
    .drawer-right-leave-to {
        transform: translateX(100%);
    }
}
</style>