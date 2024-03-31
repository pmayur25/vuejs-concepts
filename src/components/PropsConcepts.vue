<script setup>
// Props are "immutable" which means there value can't be changed. they are just read-only
const { title, firstName, lastName } = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Title'
    },
    firstName: String,
    lastName: String,
    age: {
        type: Number,
        validator: (propValue) => {
            return propValue >= 18 ? true : false
        },
    }
});
</script>
<template>
    <div>
        <h4>{{ title }}</h4>
        <h5>{{ firstName }} {{ lastName }} {{ age }}</h5>
    </div>
</template>