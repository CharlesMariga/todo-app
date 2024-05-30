<script setup lang="ts">
interface ColorLabelProps {
    variant: "pending" | "complete" | "backlog";
}

const props = defineProps<ColorLabelProps>();
</script>

<template>
    <div
        class="h-2 w-4 rounded-full"
        :class="{
            'bg-warning-400': props.variant === 'pending',
            'bg-gray-500': props.variant === 'backlog',
            'bg-success-600': props.variant === 'complete',
        }"
    />
</template>
