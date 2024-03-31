<script setup>
import { ref } from 'vue';
const formData = ref({ userName: '', email: '', password: '' });
</script>

<template>
    <div>
        <button @click="$emit('incrementCounter')">+</button>
        <br />
        <br />
        <form @submit.prevent="$emit('submitForm', { userName: formData.userName, email: formData.email, password: formData.password })">
            <input type="text" placeholder="enter name" v-model="formData.userName" />
            <input type="email" placeholder="enter email" v-model="formData.email" />
            <input type="password" placeholder="enter password" v-model="formData.password" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>