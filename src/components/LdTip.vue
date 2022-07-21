<script setup>
import {ref, onMounted, nextTick} from 'vue';
const status = ref(true);
const props = defineProps({
    // 消息
    message: {
        type: String,
        default: ''
    },
    // 间隔时间
    delay: {
        type: Number,
        default: 2000
    }
});
const emit = defineEmits([
    'close'
]);
onMounted(() => {
    setTimeout(() => {
        status.value = false;
    }, props.delay);
});
const onAfterLeave = () => {
    emit('close');
};
</script>
<template>
	<transition
		name="ld-tip"
		appear
		@after-leave="onAfterLeave"
	>
		<section
			v-show="status"
			class="ld-tip"
		>
			{{ message }}
		</section>
	</transition>
</template>
<style lang="scss">
.ld-tip{
    position: fixed;
    left: 50%;
    bottom: 20vh;
    transform: translateX(-50%);
    font-size: 14px;
    background-color: rgba(#000, .6);
    padding: 10px 25px;
    color: #eee;
    border-radius: 20px;
    opacity: 1;
}
 .ld-tip-enter-active,
 .ld-tip-leave-active{
    transition: all 1s;
 }
.ld-tip-enter-from,
.ld-tip-leave-to {
   opacity: 0;
}

</style>