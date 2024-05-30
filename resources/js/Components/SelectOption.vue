<script setup lang="ts">
import { ListboxOption } from "@headlessui/vue";

defineProps();
</script>

<template>
    <ListboxOption
        as="li"
        class="flex cursor-pointer items-center gap-2 px-4 py-3"
        v-bind="$attrs"
    >
        <slot />
    </ListboxOption>
</template>
