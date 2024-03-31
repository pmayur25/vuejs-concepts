<script setup>
import { ref } from 'vue';
const friends = ref(['Mayank', 'Nishil', 'Viral']);
</script>

<template>
        <ul>
            <li v-for="(friend, i) in friends" :key="i">{{ friend }}</li>
        </ul>
</template>