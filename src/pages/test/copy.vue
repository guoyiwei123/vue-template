<script setup>
import {ref, inject} from 'vue';
const el = ref(null); 
const clipBoard = inject('clipBoard');
const onClick = () => {
    clipBoard('ccopy-123458458558');
};
</script>
<template>
	<button
		ref="el"
		@click="onClick"
	>
		copy
	</button>
</template>