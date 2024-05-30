<script setup lang="ts">
interface LabelProps {
    for: string;
}

const props = defineProps<LabelProps>();
</script>

<template>
    <label :for="props.for" class="font-sourcesans3 text-lg font-normal">
        <slot />
    </label>
</template>
