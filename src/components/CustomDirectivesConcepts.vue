<script setup>
const vFormatDiv = {
    mounted: (el, binding) => {
        el.style.fontSize = binding.value + 'px';
        el.style.color = 'red';
    }
};

</script>

<template>
        <div>
            <h4>Custom Directives</h4>
            <p>This is used for Map data changes on DOM behavior</p>
            <h3 v-format-div="16">This is example of custom directives</h3>
        </div>
</template>