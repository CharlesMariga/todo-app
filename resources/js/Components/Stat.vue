<script setup lang="ts">
import { cva } from "class-variance-authority";
import SvgIcon from "./SvgIcon.vue";

interface StatProps {
    value: string;
    variant?: "pending" | "complete" | "backlog";
    highest?: string | number;
    medium?: string | number;
    low?: string | number;
}

const props = withDefaults(defineProps<StatProps>(), {
    variant: "pending",
});

const startVariants = cva(["p-3", "rounded-[10px]", "min-w-[110px]"], {
    variants: {
        intent: {
            pending: ["bg-warning-50"],
            complete: ["bg-success-50"],
            backlog: ["bg-gray-50"],
        },
    },
    defaultVariants: {
        intent: props.variant,
    },
});
</script>

<template>
    <div :class="startVariants()">
        <h4 class="font-poppins text-sm font-medium text-gray-500">
            {{
                props.variant === "pending"
                    ? "Pending"
                    : props.variant === "complete"
                      ? "Complete"
                      : "Backlog"
            }}
        </h4>
        <h3 class="font-poppins text-[32px] font-bold">{{ props.value }}</h3>
        <div v-if="props.variant == 'pending'" class="flex gap-1">
            <div class="flex items-center gap-0.5">
                <SvgIcon
                    name="double-chevron-up"
                    class="h-4 w-4 text-danger-600"
                />
                <p class="font-poppins text-xs font-medium">
                    {{ props.highest }}
                </p>
            </div>
            <div class="flex items-center gap-0.5">
                <SvgIcon name="equal" class="h-4 w-4 text-warning-400" />
                <p class="font-poppins text-xs font-medium">
                    {{ props.medium }}
                </p>
            </div>
            <div class="flex items-center gap-0.5">
                <SvgIcon name="chevron-down" class="h-4 w-4 text-info-600" />
                <p class="font-poppins text-xs font-medium">
                    {{ props.low }}
                </p>
            </div>
        </div>
    </div>
</template>
