<script setup>
import { shallowRef} from "vue";
import Component1 from "~components/Component1";
import Component2 from "~components/Component2";
const type = shallowRef(Component1);
const onToggle = () => {
    type.value = type.value === Component1?Component2: Component1;
    console.log(type.value === Component1);
};
</script>
<template>
	<div class="test">
		<div @click="onToggle">
			transform
		</div>
		<keep-alive>
			<component :is="type" />
		</keep-alive>
		<router-link to="/">
			Home
		</router-link>
	</div>
</template>
