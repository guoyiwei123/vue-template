<script setup>
import {useRouter} from "vue-router";
import Test from "~components/Test";
const router = useRouter();
const goTest = () => {
    router.push({
        path: "/test",
        query: {
            a: "是多少"
        }
    });
};
</script>
<template>
	<Test />
	<button @click="goTest">
		go test
	</button>
</template>
