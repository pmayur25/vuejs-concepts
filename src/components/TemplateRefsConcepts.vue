<script setup>
import { ref, onMounted } from 'vue';
const myRef = ref('');
const counter = ref(10);

const myRefFunc = (el) => {
    console.log(el.textContent);
    el.textContent = 'This is Updated function ref paragraph';
    el.classList.add('text-red');
}

const increment = () => counter.value++;

const decrement = () => counter.value--;

defineExpose({ counter, increment, decrement });

onMounted(() => {
    console.log(myRef.value);
    myRef.value.focus();
    myRef.value.value = 'Initial Value';
});
</script>

<template>
    <div>
        <h4>Template Refs</h4>
        <p>This is used on pass ref to DOM elements like input. same like useRef in react.js</p>
        <h5>Basic Ref Method</h5>
        <input type="text" placeholder="Type Something..." ref="myRef">
        <br /><br />
        <h5>Function Ref Method</h5>
        <p :ref="myRefFunc">This is function ref paragraph.</p>
        <br /><br />
        <h5>Component Ref Method</h5>
        <h5>Counter: {{ counter }}</h5>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>