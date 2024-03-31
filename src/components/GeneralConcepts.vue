<script setup>
// Text Interpolation
const myMessage = 'Message';

function add(x, y) {
    return x + y
}
// Attribute Binding
// Static binding
const googleLink = 'https://google.com';
// Dynamic binding
const imageInfo = {
    src: 'https://images.unsplash.com/photo-1710959575225-835d7d4a3b8f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'just a random image',
    width: 300,
    height: 300,
};
</script>

<template>
    <!-- Text Interpolation  -->
    <div>

        <h4>Text Interpolation</h4>
        <p>{{ myMessage }}</p>
        <p>Sum: {{ add(2, 3) }}</p>
    </div>
    <!-- Text Interpolation  -->
    <!-- Attributes Binding -->
    <div>
        <h4>Attributes Binding </h4>
        <div>
            <p>OLD Way</p>
            <a v-bind:href="googleLink">Google.com</a>
        </div>
        <div>
            <p>New way</p>
            <a :href="googleLink">Google.com</a>
        </div>
        <div>
            <p>Dynamic Binding</p>
            <img :="imageInfo" />
        </div>
    </div>
    <!-- Attributes Binding -->

    <!-- Global Style -->
    <div>
        <p class="text-red">Using global class from another component</p>
    </div>
    <!-- Local Style -->
    <div>
        <p class="text-pink">Using local class from another component</p>
    </div>
    <!-- Combined Style -->
    <div>
        <p class="text-highlight">Using combined class from another component</p>
    </div>
</template>

<style>
.text-red {
    color: red;
}
</style>