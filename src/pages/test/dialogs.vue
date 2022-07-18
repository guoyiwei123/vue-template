<script setup>
import {ref} from 'vue';
// import dialogs from '~components/Dialog';
import LdButton from '~components/LdButton';
import LdDrawer from '~components/LdDrawer';
const status = ref(false);
const change = () => {
	status.value = !status.value;
};
</script>
<template>
	<ld-button
		type="danger"
		@click="change"
	>
		change
	</ld-button>
	<drawer
		v-model="status"
		position="left"
	/>
	<!-- <dialogs v-model="status">
		<template #head>
			Tip
		</template>
		This is a message
		<template #footer>
			<button
				class="button"
				@click="change"
			>
				cancel
			</button>
			<button class="button primary">
				Ok
			</button>
		</template>
	</dialogs> -->
</template>