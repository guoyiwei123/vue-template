<script setup>
import {reactive, provide, nextTick} from 'vue';
const formItems = reactive([]);
// 初始化表单项
const initFormItem = (name, value, rule, options) => {
    name && formItems.push({
        name,
        value,
        rule,
        options
    });
};
// 修改表单数据
const updateValue = (name, value) => {
    const formItem = formItems.find(item => item.name == name);
    if(formItem){
        formItem.value = value;
    }
};
// 删除表单项
const removeFormItem = (name) => {
    const formItemIndex = formItems.findIndex(item => item.name == name);
    formItemIndex != -1 && formItems.splice(formItemIndex, 1);
};
// 表单提交方法
const submit = () => {
    return new Promise((resolve, reject) => {
        const formData = {};
        formItems.forEach(item => {
            const {name, value, rule, options} = item;
            // 判断规则配置是否存在
            if(item.rule){
                // 判断是否为必填项
                if(rule.required && !value){
                    options.notifyWarn(rule.message);
                    reject(rule.message);
                // 判断是否为正则
                }else if(rule.validator instanceof RegExp){
                    if(!rule.validator.test(value)){
                        options.notifyWarn(rule.message);
                        reject(rule.message);
                    }
                // 判断是否为方法
                }else if(rule.validator instanceof Function){
                    const result = rule.validator(value);
                    if(!(result && result.success)){
                        options.notifyWarn(result.message || rule.message);
                        reject(rule.message);
                    }
                }
            }
            formData[name] = value;
        });
        resolve(formData);
    });
};
// 表单提交事件
const onSubmit = () => {
    submit();
    return false;
};
provide('initFormItem', initFormItem);
provide('updateValue', updateValue);
provide('removeFormItem', removeFormItem);
defineExpose({
    submit
});
</script>
<template>
	<form
		v-bind="$attrs"
		@submit.prevent="onSubmit"
	>
		<slot />
	</form>
</template>