<script setup lang="ts">
import { IconType } from "@/types/SvgIconTypes";
import { defineAsyncComponent } from "vue";

interface SvgIconProps {
    name?: IconType;
}

const props = defineProps<SvgIconProps>();

const icon = defineAsyncComponent(
    () => import(`../../assets/svgs/${props.name}.svg`),
);
</script>

<template>
    <component v-if="props.name" :is="icon" />
</template>
