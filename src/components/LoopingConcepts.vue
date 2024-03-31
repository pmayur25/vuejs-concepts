<script setup>
import { ref } from 'vue';
const users = ref([{ id: '1', name: 'Mayur Patel', designation: 'Tech Lead', companyName: 'Linearloop' }, { id: '2', name: 'Mayank Patel', designation: 'CEO', companyName: 'Linearloop' }, { id: '3', name: "Nishil Patel", designation: 'Co-founder', companyName: 'BetterBugs' }, { id: '4', name: "Viral Patel", designation: 'CEO', companyName: 'QAble' }]);
</script>
<template>
    <div>
        <h4>Looping Rendering</h4>
        <ul v-for="(user) in users" :key="user.id">
            <li v-for="(value,keys, i) in user" :key="i">{{ keys }}: {{ value }}</li>
        </ul>
    </div>
</template>