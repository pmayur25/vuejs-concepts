<script setup></script>

<template>
    <slot></slot>
    <slot>
        <p>This is fallback / default content</p>
    </slot>

    <slot name="title"></slot>

    <slot name="content"></slot>
</template>