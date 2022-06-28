<script setup>
import { ref, onActivated, onDeactivated } from "vue";
const msg = ref("");
onActivated(() => {
    console.log("activated2");
});
onDeactivated(() => {
    console.log("deactivated2");
});
</script>
<template>
	<p>Current component: B</p>
	<span>Message is: {{ msg }}</span>
	<input v-model="msg">
</template>
