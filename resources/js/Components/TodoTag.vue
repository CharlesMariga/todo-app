<script setup lang="ts">
import { Status } from "@/types/Status";
import ColorLabel from "./ColorLabel.vue";
import SvgIcon from "./SvgIcon.vue";
import { Priority } from "@/types/priority";
import { computed } from "vue";
import { priorities } from "@/Pages/lib/data";
import { IconType } from "@/types/SvgIconTypes";

interface TodoTagProps {
    type: "status" | "priority";
    priorityVariant?: Priority;
    statusVariant?: Status;
}

const props = defineProps<TodoTagProps>();

const priority = computed(() =>
    priorities.find((el) => el.value === props.priorityVariant),
);
</script>

<template>
    <div
        class="flex items-center gap-1 rounded-full bg-gray-50 px-1.5 py-[3px]"
    >
        <template v-if="type == 'status' && props.statusVariant">
            <ColorLabel :variant="props.statusVariant" />
            <p class="font-poppins text-xs font-medium capitalize">
                {{ props.statusVariant }}
            </p>
        </template>
        <template v-else-if="type === 'priority' && priority">
            <SvgIcon
                :name="priority.icon as IconType"
                :class="`${priority.color} h-4 w-4`"
            />
            <p class="font-poppins text-xs font-medium">{{ priority.label }}</p>
        </template>
    </div>
</template>
