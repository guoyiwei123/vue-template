<script setup>
import {onMounted, ref} from 'vue';
const el = ref(null);
onMounted(() => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://accounts.google.com/gsi/client';
    el.value.appendChild(script);
});
</script>
<template>
	<div ref="el">
		<div
			id="g_id_onload"
			data-client_id="1073896437662-t97q08gofjrnnbu202u2ftr4mkppgidn.apps.googleusercontent.com"
			data-login_uri="http://localhost:8080/test/oauth"
			data-auto_prompt="false"
		>
			login
		</div>
		<div
			class="g_id_signin"
			data-type="standard"
			data-size="large"
			data-theme="outline"
			data-text="sign_in_with"
			data-shape="rectangular"
			data-logo_alignment="left"
		/>
	</div>
</template>