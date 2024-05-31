<!-- 

    NOTE: Not all features for these component have been implemted
    since not all features are used in this demo, so there is no need 
    of over engineering. This is just to show what's possible.

    You can check a similar implementation for the Button component

 -->

<script setup lang="ts">
import { IconType } from "@/types/SvgIconTypes";
import { cva } from "class-variance-authority";
import SvgIcon from "./SvgIcon.vue";
import { computed } from "vue";

interface InputProps {
    size?: "sm" | "base" | "lg";
    iconLeading?: IconType;
    iconTrailing?: IconType;
    id?: string;
    label?: string;
    hasLabelIcon?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
    size: "base",
    hasLabelIcon: false,
});

defineOptions({
    inheritAttrs: false,
});

const model = defineModel();

const inputVariants = cva(
    [
        "w-full",
        "border",
        "border-gray-200",
        "bg-white",
        "text-gray-900",
        "outline-none",
        "focus:border-primary-600",
        "disabled:bg-gray-100",
        "disabled:opacity-75",
    ],
    {
        variants: {
            size: {
                sm: [
                    "pr-3",
                    "py-2",
                    "text-xs",
                    "rounded",
                    props.iconLeading ? "pl-8" : "pl-3",
                ],
                base: [
                    "pr-4",
                    "py-3",
                    "text-sm",
                    "rounded-md",
                    props.iconLeading ? "pl-11" : "pl-4",
                ],
                lg: [
                    "pr-6",
                    "py-4",
                    "rounded-lg",
                    "text-lg",
                    props.iconLeading ? "pl-[60px]" : "pl-6",
                ],
            },
        },
        defaultVariants: {
            size: props.size,
        },
    },
);

const labelVariants = cva(
    ["flex", "gap-1", "items-center", "font-sourcesans3"],
    {
        variants: {
            size: {
                sm: ["text-xs"],
                base: ["text-sm"],
                lg: ["text-lg"],
            },
        },
        defaultVariants: {
            size: props.size,
        },
    },
);

const iconSizes = computed(() => {
    return {
        "h-4 w-4": props.size === "sm",
        "h-5 w-5": props.size === "base",
        "h-6 w-6": props.size === "lg",
    };
});
</script>

<template>
    <div class="flex flex-col gap-1 font-sourcesans3">
        <label v-if="props.label" :for="props.id" :class="labelVariants()">
            {{ props.label }}
            <SvgIcon
                v-if="props.hasLabelIcon"
                name="information-circle"
                class="h-3 w-3"
            />
        </label>
        <div class="relative">
            <SvgIcon
                v-if="props.iconLeading"
                :name="props.iconLeading"
                class="absolute text-gray-400"
                :class="{
                    ...iconSizes,
                    'left-3 top-2': props.size === 'sm',
                    'left-4 top-3': props.size === 'base',
                    'left-6 top-4': props.size === 'lg',
                }"
            />
            <input
                v-bind="$attrs"
                v-model="model"
                :id="props.id"
                :class="inputVariants()"
            />
        </div>
    </div>
</template>
