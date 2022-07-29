<script setup>
import {ref, inject, onMounted, onBeforeUnmount, provide} from 'vue';
const props = defineProps({
    // 表单项名称
    name: {
        type: String,
        default: ''
    },
    // 标签文本
    label: {
        type: String,
        default: ''
    }
});
const el = ref(null);
// 警告信息
const warnMessage = ref('');
const initFormItem = inject('initFormItem');
const updateValue = inject('updateValue');
const removeFormItem = inject('removeFormItem');
provide('updateValue', (value) => {
    updateValue(props.name, value);
});
onMounted(() => {
    initFormItem(props.name);
});
onBeforeUnmount(() => {
    removeFormItem(props.name);
});
</script>
<template>
	<div
		class="ld-form-item"
	>
		<label v-if="label">{{ label }}</label>
		<div
			ref="el"
			class="form-item"
		>
			<slot />
		</div>
		<div class="warn-message">
			<template v-if="warnMessage">
				{{ warnMessage }}
			</template>
			<template v-else>
				<slot name="warn" />
			</template>
		</div>
	</div>  
</template>