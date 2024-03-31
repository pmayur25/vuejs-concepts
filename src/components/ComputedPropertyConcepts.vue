<script setup>
import { ref, reactive, computed } from 'vue';
const userInfo = reactive({ firstName: 'Mayur', lastName: 'Patel' });

const fullUserName = computed(() => {
    return userInfo.firstName + ' ' + userInfo.lastName;
});

const counter = ref(1);

const squaredCounter = computed(() => counter.value ** 2);

const incrementCounter = () => counter.value++;
</script>
<template>
    <div>
        <!-- computed used for complex logic that includes reactive data, it is recommended to use a computed property -->
        <h4>Computed Property</h4>
        <h3>Full Name: {{ fullUserName }}</h3>

        <h4>Counter: {{ counter }}</h4>
        <h4>Squared Counter: {{ squaredCounter  }}</h4>
        <button @click="incrementCounter">+</button>
    </div>
</template>