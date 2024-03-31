<script>
import { ref } from 'vue'

export default {
    setup() {
        const count = ref(0)

        function increment() {
            // .value is needed in JavaScript
            count.value++
        }

        // don't forget to expose the function as well.
        return {
            count,
            increment
        }
    }
}
</script>

<template>
    <div>
        <h4>How to Expose State Variables</h4>
        <h5>Count: {{ count }}</h5>
        <button @click="increment">Increment</button>
    </div>
</template>