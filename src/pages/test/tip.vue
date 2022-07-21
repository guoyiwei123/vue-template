<script setup>
import {onMounted} from 'vue';
import useLdTip from '~hooks/useLdTip';
import LdMessage from '~components/LdMessage';
const Tip = useLdTip();
onMounted(() => {
    Tip('1234', 2000);
    setTimeout(() => {
        Tip('1234', 2000);
    }, 500);
});
</script>
<template>
	<ld-tip />
	<ld-message />
</template>