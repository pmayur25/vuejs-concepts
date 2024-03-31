<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
const message = ref('Hello Vue!');

// Custom functions
const onUpdateMessage = () => {
    message.value = 'Updated Message';
}

// LifeCycle Hooks
onBeforeMount(() => {
    console.log('on Before mount');
});

onMounted(() => {
    console.log('on Mounted');
});

onBeforeUpdate(() => {
    console.log('on Before Updated');
});

onUpdated(() => {
    console.log('on Updated');
});

onBeforeUnmount(() => {
    console.log('on before Unmount');
})

onUnmounted(() => {
    console.log('on Unmounted');
});
</script>

<template>
    <h5>{{ message }}</h5>
    <button @click="onUpdateMessage">Update</button>
</template>