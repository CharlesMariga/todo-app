<script setup lang="ts">
import { FlashMessage } from "@/types/message";
import SvgIcon from "./SvgIcon.vue";
</script>

<template>
    <div
        v-if="($page.props.flash as FlashMessage).message"
        class="mx-6 mt-6 flex items-center justify-between gap-4 rounded-lg bg-success-200 p-4 text-success-600 lg:mx-0"
    >
        <div class="flex items-center gap-3">
            <SvgIcon name="check-circle" class="h-4 w-4" />
            <p class="font-inter font-medium">
                {{ ($page.props.flash as FlashMessage).message }}
            </p>
        </div>
    </div>
</template>
