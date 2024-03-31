<script setup>
import { ref } from 'vue';
import ComponentOne from './ComponentOne.vue';
import ComponentTwo from './ComponentTwo.vue';
import ComponentThree from './ComponentThree.vue';
const currentTab = ref('ComponentOne');
const tabs = ref({
    ComponentOne,
    ComponentTwo,
    ComponentThree
});
</script>

<template>
    <div>
        <button @click="currentTab = 'ComponentOne'">One</button>
        <button @click="currentTab = 'ComponentTwo'">Two</button>
        <button @click="currentTab = 'ComponentThree'">Three</button>
    </div>
    <!-- Dynamic Component -->
    <component :is="tabs[currentTab]" />
</template>