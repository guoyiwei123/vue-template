<script setup>
import {computed, watch, ref, toRef, inject, nextTick} from 'vue';
import useFormValue from '~hooks/useFormValue';
const props = defineProps({
    // 状态
    modelValue: {
        type: Boolean,
        default: false
    },
    // 值
    value: {
        type: String,
        default: ''
    },
    // 禁用状态
    disabled: {
        type: Boolean,
        default: false
    },
    // 中间状态
    intermediate: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits([
    'update:modelValue'
]);
const updateValue = useFormValue();
const el = ref(null);
const status = ref(false);
const modelValue = toRef(props, 'modelValue');
const checkList = inject('checkList', null);
const setSelectedValue = inject('setSelectedValue');
const removeSelectedValue = inject('removeSelectedValue');
// 监听状态更变
watch(status, (newValue) => {
    // 判断是否有使用checkbox group
    if(setSelectedValue 
        && removeSelectedValue 
        && setSelectedValue instanceof Function 
        && removeSelectedValue instanceof Function){
        if(newValue){
            console.log(props.value);
            setSelectedValue(props.value);
            updateValue(props.value);
        }else{
            removeSelectedValue(props.value);
            updateValue();
        }
    }
    nextTick(() => {
        // 判断节点是否已经挂载
        if(el.value){
            el.value.checked = newValue;
        }
    });
});
// 监听外部传入的状态
watch(modelValue, (newValue) => {
    status.value = newValue;
}, {
    immediate: true
});
// 判断是否有注入状态
checkList && checkList.value instanceof Array && watch(checkList, () => {
    status.value = checkList.value.includes(props.value);
    // 判断节点是否已经挂载
}, {
    immediate: true
});
const classList = computed(() => {
    const list = [];
    status.value && list.push('active');
    props.intermediate && intermediate.push('intermediate');
    props.disabled && list.push('disabled');
    return list;
});
const onChange = () => {
    status.value = !status.value;
};
</script>
<template>
	<section
		class="ld-checkbox"
		:class="classList"
		@click="onChange"
	>
		<span class="checkbox-sel" />
		<span class="label">
			<slot />
		</span>
		<input
			ref="el"
			class="input-checkbox"
			type="checkbox"
			:value="value"
		>
	</section>
</template>
<style lang="scss">
@import "../../scss/mixin.scss";
$active-color: #409eff;
.ld-checkbox{
    display: inline-flex;
    align-items: center;
    color: #606266;
    cursor: pointer;
    @include clear-default-touch-style;
    .checkbox-sel{
        position: relative;
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        background-color: #fff;
        &::after{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 3px;
            height: 7px;
            border: 1px solid #fff;
            border-left: 0;
            border-top: 0;
            content: '';
            transform: translate(-50%, -50%) rotate(45deg) scaleY(0);
            transition: transform .15s ease-in .05s;
        }
    }
    .label{
        padding: 0 8px;
        user-select: none;
    }
    .input-checkbox{
        display: none;
    }
    &.active, &.intermediate{
        color: $active-color;
        .checkbox-sel{
            background-color: $active-color;
            border-color: $active-color;
        }
    }
    // 选中状态
    &.active{
         .checkbox-sel{
            &::after{
                transform: translate(-50%, -50%) rotate(45deg) scaleY(1);
            }
         }
    }
    // 中间状态
    &.intermediate{
        .checkbox-sel{
            &::after{
                width: 12px;
                height: 2px;
                border-color: transparent;
                background-color: #fff;
                transform: translate(-50%, -50%) scale(.5);
                transition: unset;
            }
        }
    }
    // 禁用状态
    &.disabled{
        pointer-events: none;
        cursor: not-allowed;
        color: #a8abb2;
        .checkbox-sel{
            background-color: #f2f6fc;
            border-color: #dcdfe6;
            &::after{
                border-color: #a8abb2;
            }
        }
    }
}


</style>