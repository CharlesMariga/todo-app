<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions } from "@headlessui/vue";
import SvgIcon from "./SvgIcon.vue";

const model = defineModel();
</script>

<template>
    <Listbox v-model="model" v-bind="$attrs" as="div" class="relative">
        <ListboxButton
            as="div"
            class="relative w-full cursor-default rounded-md border border-gray-200 px-4 py-3 text-left"
            v-slot="{ open }"
        >
            <div class="flex items-center justify-between">
                <button class="flex items-center gap-2">
                    <slot name="selectedValue" />
                </button>
                <SvgIcon
                    name="chevron-down"
                    class="h-4 w-4 text-gray-900 transition"
                    :class="{ 'rotate-180': open, 'rotate-0': !open }"
                />
            </div>
        </ListboxButton>
        <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-hidden overflow-y-auto rounded-md border border-gray-300 bg-white outline-none"
        >
            <slot />
        </ListboxOptions>
    </Listbox>
</template>
