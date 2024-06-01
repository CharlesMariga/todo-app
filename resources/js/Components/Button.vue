<script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "../Lib/utils";
import { type ClassValue } from "class-variance-authority/dist/types.js";
import { IconType } from "@/types/SvgIconTypes";
import SvgIcon from "./SvgIcon.vue";
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

interface ButtonProps {
    type?: "submit" | "reset" | "button";
    variant?: "primary" | "secondary" | "tertiary";
    size?: "sm" | "base" | "lg";
    class?: string;
    loading?: boolean;
    href?: string;
    iconLeading?: IconType;
    iconTrailing?: IconType;
    disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
    type: "button",
    variant: "primary",
    size: "base",
    loading: false,
    disabled: false,
});

const buttonVariants = cva(
    [
        "font-poppins",
        "font-medium",
        "text-center",
        "flex",
        "items-center",
        "justify-center",
        "disabled:opacity-75",
        props.disabled && "opacity-75",
    ],
    {
        variants: {
            intent: {
                primary: ["bg-primary-600", "text-white"],
                secondary: ["bg-secondary", "text-white"],
                tertiary: ["bg-gray-100", "text-gray-900"],
            },
            size: {
                sm: ["text-xs", "rounded", "px-3", "py-2", "gap-1"],
                base: ["text-sm", "rounded-md", "px-4", "py-3", "gap-2"],
                lg: ["text-lg", "rounded-lg", "px-6", "py-4", "gap-3"],
            },
        },
        defaultVariants: {
            intent: props.variant,
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
    <Component
        v-bind="$attrs"
        :is="props.href ? Link : 'button'"
        :class="cn(buttonVariants(), props.class)"
        :type="props.type"
        :href="props.href"
        :disabled="props.disabled || props.loading"
    >
        <SvgIcon
            v-if="props.iconLeading && !props.loading"
            :name="props.iconLeading"
            :class="iconSizes"
        />
        <span :class="{ 'opacity-0': props.loading }">
            <slot>Button</slot>
        </span>
        <SvgIcon
            v-if="props.iconTrailing && !props.loading"
            :name="props.iconTrailing"
            :class="iconSizes"
        />
        <SvgIcon
            v-if="props.loading"
            name="loader"
            :class="iconSizes"
            class="absolute animate-spin rounded-full"
        />
    </Component>
</template>
