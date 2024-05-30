<script setup lang="ts">
import Logo from "@/Components/Logo.vue";
</script>

<template>
    <div class="flex min-h-dvh flex-col">
        <Logo class="grid justify-center px-6 py-[18px]" />

        <div class="flex flex-1 flex-col">
            <div v-bind="$attrs" class="flex flex-1 flex-col">
                <div
                    class="mx-auto max-w-[500px] p-6 sm:rounded-[10px] sm:border sm:border-gray-300"
                >
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
