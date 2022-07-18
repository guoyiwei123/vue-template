<script setup>
import {ref, watch} from 'vue';
import LdCheckbox from '~components/LdCheckbox';
import LdCheckboxGroup from '~components/LdCheckboxGroup.vue';
import LdButton from '~components/LdButton.vue';
const status = ref(true);
const checkList = ref(['456']);
const onChange = () => {
    checkList.value.push('123');
};
watch(status, (newValue) => {
    console.log('form status', newValue);
});
watch(checkList, (newValue) => {
    console.log('form status', newValue);
});
</script>
<template>
	<ld-checkbox
		v-model="status"
		value="123"
	>
		123
	</ld-checkbox>      
	<ld-checkbox-group v-model="checkList">
		<ld-checkbox value="123">
			123
		</ld-checkbox>
		<ld-checkbox value="456">
			456
		</ld-checkbox>
	</ld-checkbox-group>
	<ld-button @click="onChange">
		change
	</ld-button>
</template>