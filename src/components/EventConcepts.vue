<!-- Manually exposing state and methods via setup n script tag -->
<script setup>
import { reactive, ref } from 'vue';
// Reactivity -> with Ref Method
const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
// Reactivity -> with Reactive Method
const state = reactive({ count: 0 });

// Form Submit Method
const submitHandler = (e) => {
    e.preventDefault();
    alert('Form Submitted');
}
</script>
<template>
    <div>
        <h4>Events</h4>
        <!-- REf Method -->
        <div>
            <h5>With Ref Method: Count: {{ count }}</h5>
            <!-- Default way -->
            <button v-on:click="count++">Plus</button>
            <!-- Shorten way -->
            <button @:click="count--">Minus</button>
        </div>
        <div>
            <h5>With Ref Method Event Handler: Count: {{ count }}</h5>
            <!-- Default way -->
            <button v-on:click="increment">Plus</button>
            <!-- Shorten way -->
            <button @:click="decrement">Minus</button>
        </div>
        <!-- REf Method -->
        <!-- Reactive Method -->
        <!-- Limitation of reactive method: 
            1. Limited value types
            2. Cannot replace entire object
            3. Not destructure-friendly
        -->
        <div>
            <h5>With Reactive Method: Count: {{ state.count }}</h5>
            <!-- Default way -->
            <button v-on:click="state.count++">Plus</button>
            <!-- Shorten way -->
            <button @:click="state.count--">Minus</button>
        </div>
        <!-- Reactive Method -->
        <!-- Form Submit Method -->
        <div>
            <h5>Form Submit Method</h5>
            <form @submit="submitHandler">
                <input type="text" placeholder="enter your name" />
                <input type="email" placeholder="enter your email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>