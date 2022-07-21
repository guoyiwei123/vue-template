<script setup>



</script>
<template>
	<section class="ld-message">
		<svg
			class="icon"
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
		><path
			fill="currentColor"
			d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
		/></svg>
		<p class="text">
			1234
		</p>
	</section>
</template>
<style lang="scss">
.ld-message{
    display: flex;
    position: fixed;
    top: 20px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    padding: 15px 20px;
    box-sizing: border-box;
    border: 1px solid #e1f3d8;
    background-color: #f0f9eb;
    color: #67c23a;
    font-size: 14px;
    line-height: 14px;
    align-items: center;
    .icon{
        height: 1em;
        width: 1em;
    }
    .text{
        margin: 0 0 0 10px;
        padding: 0;
    }
    @media screen and (min-width: 380px){
        min-width: 380px;
        width: unset;
    }
}
</style>
