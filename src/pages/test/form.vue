<script setup>
import {ref, watch} from 'vue';
import LdCheckbox from '~components/form/LdCheckbox';
import LdCheckboxGroup from '~components/form/LdCheckboxGroup.vue';
import LdButton from '~components/LdButton.vue';
import LdForm from '~components/form/LdForm';
import LdFormItem from '~components/form/LdFormItem';
const status = ref(true);
const form = ref(null);
const checkList = ref(['456']);
const onChange = () => {
    checkList.value.push('123');
};
const onClick = () => {
	form.value
		.submit()
		.then(res => {
			console.log(res);
		})
		.catch(e => {
			console.log(e);
		});
};
watch(status, (newValue) => {
    console.log('form status', newValue);
});
watch(checkList, (newValue) => {
    console.log('form status', newValue);
});
</script>
<template>
	<ld-form ref="form">
		<ld-form-item
			name="check"
		>
			<ld-checkbox value="123">
				123
			</ld-checkbox>
		</ld-form-item>
		<ld-form-item name="checks">
			<ld-checkbox-group>
				<ld-checkbox value="123">
					123
				</ld-checkbox>
				<ld-checkbox value="456">
					456
				</ld-checkbox>
			</ld-checkbox-group>
		</ld-form-item>
	</ld-form>
	<ld-button @click="onClick" />
</template>