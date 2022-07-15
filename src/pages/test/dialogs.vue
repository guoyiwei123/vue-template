<script setup>
import {ref} from 'vue';
// import dialogs from '~components/Dialog';
import drawer from '~components/Drawer';
const status = ref(false);
const change = () => {
	status.value = !status.value;
};
</script>
<template>
	<button @click="change">
		change
	</button>
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