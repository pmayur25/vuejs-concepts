import { ref } from 'vue';

export const useCounter = (initCount = 0) => {
    const count = ref(initCount);

    const increment = () => count.value++;

    const decrement = () => count.value--;

    return { count, increment, decrement };
};