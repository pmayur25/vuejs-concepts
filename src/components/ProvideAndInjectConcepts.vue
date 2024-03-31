<script setup>
import { inject } from 'vue';
const loggedInUserName = inject('loggedInUserName');
const loggedInUserType = inject('loggedInUserType');
</script>

<template>
    <div>
        <h4>Provide & Inject Concepts</h4>
        <p>This concept used for passing data parent component to N numbers child components. Same like react.js context API</p>
        <h5>{{ loggedInUserName }} {{ loggedInUserType }}</h5>
    </div>
</template>