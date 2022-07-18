<script setup>
import TransitionContainer from './TransitionContainer.vue';
defineProps({
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
    }
});
const emit = defineEmits([
    'update:modelValue'
]);
// 状态更变事件
const onChange = (value) => {
    emit('update:modelValue', value);
};
</script>
<template>
	<transition-container
		:model="modelValue"
		class="ld-dialog"
		transition-name="dialog"
		@change="onChange"
	>
		<!-- 顶部 -->
		<div class="head">
			<slot name="head" />
		</div>
		<!-- 内容 -->
		<div class="content">
			<slot />
		</div>
		<!-- 底部 -->
		<div class="footer">
			<slot name="footer" />
		</div>
		<!-- 关闭按钮 -->
		<span
			class="head-close-btn"
			@click="onChange(false)"
		/>
	</transition-container>
</template>
<style lang='scss'>
.ld-dialog{
    .container{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, 0%);
        background: #fff;
        width: 60%;
        // 头部
        .head{
            padding: 10px 15px;
            font-size: 18px;
            color: #303133;
        }
        // 内容
        .content{
            padding: 15px 15px;
            font-size: 14px;
            color: #606266;
        }
        // 底部样式
        .footer{
            display: flex;
            justify-content:right;
            padding: 10px 20px;
            *{
                &:not(&:first-child){
                    margin-left: 10px;
                }
            }
        }
        // 关闭按钮
        .head-close-btn{
            position: absolute;
            top: 0;
            right: 0;
            width: 36px;
            height: 36px;
            cursor: pointer;
            &::before, &::after{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 35%;
                height: 1px;
                background-color: #303133;
            }
            &::before{
                transform: translate(-50%, -50%) rotate(45deg);
            }
            &::after{
                transform: translate(-50%, -50%) rotate(-45deg);
            }
            &:hover{
                &::before, &::after{
                    background-color: #409eff;
                }
            }
        }
        @media screen and (min-width: 769px){
            top: 15%;
            width: 50%;
        }
    }
    .dialog-enter-active,
    .dialog-leave-active {
        transition: all 0.3s ease;
    }
    .dialog-enter-from,
    .dialog-leave-to {
        opacity: 0;
        transform: translate(-50%, -10%);
    }
}
</style>