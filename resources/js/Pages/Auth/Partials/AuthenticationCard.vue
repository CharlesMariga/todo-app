<script setup lang="ts">
import SvgIcon from "@/Components/SvgIcon.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <div class="space-y-[18px]">
        <div class="flex items-center">
            <Link href="/get-started">
                <div class="mr-3 rounded-full bg-gray-100 p-2">
                    <SvgIcon name="left-arrow" />
                </div>
            </Link>
            <h1 class="font-poppins text-xl font-semibold tracking-wide">
                <slot name="title" />
            </h1>
        </div>

        <slot />
    </div>
</template>
