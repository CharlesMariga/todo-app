<script setup lang="ts">
interface SelectButtonProps {
    label?: string;
}

const props = defineProps<SelectButtonProps>();
</script>

<template>
    <span
        v-if="props.label"
        class="font-poppins text-sm font-medium text-gray-500"
        >{{ props.label }}:</span
    >
    <div class="flex items-center gap-1">
        <slot />
    </div>
</template>
