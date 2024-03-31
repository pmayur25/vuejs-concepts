<script setup>
import { useCounter } from '../shared/useCounter';

const counter = useCounter(1);

</script>

<template>
        <div>
            <h4>Composable Concept</h4>
            <p>This is used for common logic at central places same like custom hook in react.js</p>
            <h5>{{ counter.count }}</h5>
            <button @click="counter.increment">+</button>
            <button @click="counter.decrement">-</button>
        </div>
</template>