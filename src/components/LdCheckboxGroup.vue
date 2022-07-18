<script setup>
import {provide, toRef} from 'vue';
const props = defineProps({
    modelValue: {
        type: Array,
        default: () => []
    }
});
const emit = defineEmits([
    'update:modelValue'
]);
const checkList = toRef(props, 'modelValue');
provide('checkList', checkList);
// 设置选中值
provide('setSelectedValue', (value) => {
    const list = [...checkList.value];
    list.includes(value) || list.push(value);
    emit('update:modelValue', list);
});
// 清除选中值
provide('removeSelectedValue', (value) => {
    const list = [...checkList.value];
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
</script>


<template>
	<div class="ld-checkbox-group">
		<slot :check-list="modelValue" />
	</div>
</template>