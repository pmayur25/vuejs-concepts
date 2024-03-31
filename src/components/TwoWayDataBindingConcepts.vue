<script setup>
import { ref } from 'vue';
const formData = ref({ name: '', email: '', password: '' });
</script>
<template>
    <div>
        <!-- computed used for complex logic that includes reactive data, it is recommended to use a computed property -->
        <h4>Two Way Data Binding: V-model</h4>
        <form>
            <input type="text" placeholder="enter your name" v-model="formData.name" />
        </form>
        <div>
            <h4>Name: {{ formData.name }}</h4>
        </div>
    </div>
</template>