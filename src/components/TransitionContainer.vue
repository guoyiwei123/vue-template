<script setup>
import {ref, watch, toRef, nextTick} from 'vue';
const props = defineProps({
    // 动效名称
    transitionName: {
        type: String,
        default: 'overlay'
    },
    // 标题
    title: {
        type: String,
        default: ''
    },
    // 对话框关闭/隐藏状态
    model: {
        type: Boolean,
        default: false
    },
    beforeClose: {
        type: Function,
        default: null
    }
});
const emit = defineEmits([
    'change',
    'before-close'
]);
// 对外部status添加响应性
const modelValue = toRef(props, 'model');
// 外部状态
const status = ref(false);
// 内容显示状态
const containerStatus = ref(false);
// 动画事件: 离开事件
const onAfterLeave = () => {
    // 外部传入值为true时才提交通知事件
    if(modelValue.value){
        emit('change', false);
    }
    // 渲染完成后关闭外部浮层
    nextTick(() => {
        status.value = false;
    });
};
// 监听外部状态
watch(modelValue, (newValue) => {
    // 判断当前是否为开启，如果为开启，先开启外部浮层，再开启容器层
    if(newValue){
        status.value = newValue;
        nextTick(() => {
            containerStatus.value = newValue;
        });
    // 否则先关闭容器层
    }else{
        containerStatus.value = newValue;
    }
});
</script>
<template>
	<section
		v-show="status"
		class="overlay"
	>
		<transition 
			:name="transitionName"
			@after-leave="onAfterLeave"
		>
			<div
				v-show="containerStatus"
				class="container"
			>
				<slot />
			</div>
		</transition>
	</section>
</template>
<style lang='scss'>
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, .6);
}
</style>