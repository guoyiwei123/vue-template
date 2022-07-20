<script setup>
import {computed} from 'vue';
const props = defineProps({
    // 图标名称
    name: {
        type: String,
        default: ''
    }
});
// 图标名称
const iconName = computed(() => {
    return `#icon-${props.name}`;
});
</script>

<template>
	<svg
		class="ld-icon"
		aria-hidden="true"
	>
		<use :xlink:href="iconName" />
	</svg>
</template>
<style lang="scss">
.ld-icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>