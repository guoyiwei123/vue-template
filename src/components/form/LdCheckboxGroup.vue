<script setup>
import {provide, toRef, ref, watch} from 'vue';
import useFormValue from '~hooks/useFormValue';
const props = defineProps({
    modelValue: {
        type: Array,
        default: () => []
    }
});
const emit = defineEmits([
    'update:modelValue'
]);
const updateValue = useFormValue();
const modelValue = toRef(props, 'modelValue');
const checkList = ref([]);
provide('checkList', checkList);
// 设置选中值
provide('setSelectedValue', (value) => {
    const list = checkList.value;
    list.includes(value) || list.push(value);
    emit('update:modelValue', list);
    updateValue(list);
});
// 清除选中值
provide('removeSelectedValue', (value) => {
    const list = checkList.value;
    // 查找数据下标
    const index = list.findIndex(item => item === value);
    // 判断下标是否存在
    if(index === -1){
        return ;
    }
    // 清除选中值
    list.splice(index, 1);
    emit('update:modelValue', list);
});
watch(modelValue, (newValue) => {
    checkList.value = newValue;
}, {
    immediate: true
});
</script>


<template>
	<div class="ld-checkbox-group">
		<slot :check-list="modelValue" />
	</div>
</template>