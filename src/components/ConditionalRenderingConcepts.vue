<script setup>
import { ref } from 'vue';
const isUserLoggedIn = ref (false);
const userName = 'Mayur Patel';
const showDetails = ref(isUserLoggedIn);
</script>
<template>
    <div>
        <h4>Conditional Rendering</h4>
        <h3 v-if="isUserLoggedIn">Welcome, {{ userName }}</h3>
        <div v-else>
            <h4>Please login to access this content. </h4>
            <span @click="isUserLoggedIn = true">click here to login</span>
        </div>
        <div v-show="showDetails">
            <h4>You're now able to access Dashboard</h4>
            <span @click="isUserLoggedIn = false">Logout</span>
        </div>
    </div>
</template>