<script setup>
import { ref, onActivated, onDeactivated } from "vue";
const count = ref(0);
onActivated(() => {
    console.log("activated1");
});
onDeactivated(() => {
    console.log("deactivated1");
});
</script>
<template>
	<p>Current component: A</p>
	<span>count: {{ count }}</span>
	<button @click="count++">
		+
	</button>
</template>
