<script setup>
import {onMounted, onBeforeUnmount, ref, computed} from 'vue';
const scrollInfo = ref({
    x: 0,
    y: 0
});
const mainEl = ref(null);
let downTop = 0;
let scrollTop = 0;
const onMouseDown = (e) => {
    // 记录当前位置
    downTop = e.y;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};
const onMouseMove = (e) => {
    const height = mainEl.value.getBoundingClientRect().height;
    // 计算滚动高度
    scrollTop = e.y - downTop;
    // 重新记录当前位置
    downTop = e.y;
    if(scrollInfo.value.y + scrollTop < 0){
        scrollInfo.value.y = 0;
    }else if(scrollInfo.value.y + scrollTop > height){
        scrollInfo.value.y  = height;
    }else{
        scrollInfo.value.y += scrollTop;
    }
};
const onMouseUp = (e) => {
    const height = mainEl.value.getBoundingClientRect().height;
    scrollTop = e.y - downTop;
    if(scrollInfo.value.y + scrollTop < 0){
        scrollInfo.value.y = 0;
    }else if(scrollInfo.value.y + scrollTop > height){
        scrollInfo.value.y  = height;
    }else{
        scrollInfo.value.y += scrollTop;
    }
    downTop = 0;
    scrollTop = 0;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};
const mainStyle = computed(() => {
    console.log({
        'transform': `translateY(${scrollInfo.value.y}px)`
    });
    return {
        'transform': `translateY(${scrollInfo.value.y}px)`
    };
});
onMounted(() => {
    document.addEventListener('mousedown', onMouseDown);
});
onBeforeUnmount(() => {
    document.removeEventListener('mousedown', onMouseDown);
});
</script>
<template>
	<div class="ld-scroll-container">
		<main
			ref="mainEl"
			class="view"
			:style="mainStyle"
		>
			<slot />
		</main>
		<aside
			class="sroll-bar"
			data-height="100px"
		/>
	</div>
</template>
<style lang="scss">
body{
    margin: 0;
}
.ld-scroll-container{
    height: 100vh;
    overflow: hidden;
    .view{
        transform: translateY(0px);
        transition: transform .3s ease-out;
    }
    .sroll-bar{
        position: fixed;
        top: 0;
        width: 6px;
        height: 100%;
        &::after{
            content: "";
            width: 100%;
            height: attr(height);
            background-color: #909399;
            transform: attr(transform);
            transition: all .3s;
        }
    }
}

</style>