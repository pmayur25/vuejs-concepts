<script setup>
import { ref, reactive, watch} from 'vue';
const message = ref('Hello Vue!');
const inputText = ref('');
const counter = ref(0);

const state = reactive({ userName: 'mayurPatel' });

// Watch for changes in input text
watch([inputText, counter], (newVal, oldVal) => {
    message.value = `You Typed ${newVal[0]}`;
    console.log(newVal, 'newVal');
    console.log(oldVal, 'oldVal');
});

// Watch for changes on object specific property
// for that you have to pass getter function to get old and new value
watch(() => state.userName, (newVal, oldVal) => {
    console.log(newVal, 'newVal');
    console.log(oldVal, 'oldVal');
});
</script>

<template>
    <div>
        <h4>Watchers Concepts</h4>
        <p>This concepts used for when any reactive/state variable changes it will be called. same like react useEffect with specific dependencies.</p>
        <h5>Basic Method</h5>
        <h5>{{ message }}</h5>
        <input type="text" v-model="inputText" placeholder="Type Something..."/>
        <h5>Reactive Method</h5>
        <h5>{{ state.userName }}</h5>
        <button @click="state.userName = 'mayankPatel'">Update State</button>
        <h5>Multiple dependencies</h5>
        <h5>Counter: {{ counter }}</h5>
        <button @click="counter++">+</button>
    </div>
</template>