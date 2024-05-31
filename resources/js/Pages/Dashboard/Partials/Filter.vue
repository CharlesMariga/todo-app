<script setup lang="ts">
import ColorLabel from "@/Components/ColorLabel.vue";
import Input from "@/Components/Input.vue";
import Select from "@/Components/Select.vue";
import SelectButton from "@/Components/SelectButton.vue";
import SelectOption from "@/Components/SelectOption.vue";
import SvgIcon from "@/Components/SvgIcon.vue";
import { priorities, statuses } from "@/Pages/lib/data";
import { Status } from "@/types/Status";
import { IconType } from "@/types/SvgIconTypes";
import { useForm, InertiaForm, router } from "@inertiajs/vue3";
import { ref, watch } from "vue";

const allValue = {
    label: "All",
    value: "",
    icon: "",
    color: "",
};

const status = ref(allValue);
const priority = ref(allValue);
const emit = defineEmits<{
    (
        e: "filter",
        payload: {
            title: string | undefined;
            priority: string | undefined;
            status: string | undefined;
        },
    ): void;
}>();

const form: InertiaForm<{
    title: string | undefined;
    priority: string | undefined;
    status: string | undefined;
}> = useForm({
    title: "",
    status: "",
    priority: "",
});

watch(
    () => [status.value, priority.value, form.title],
    () => {
        if (status.value.value) form.status = status.value.value;
        else delete form.status;

        if (priority.value.value) form.priority = priority.value.value;
        else delete form.priority;

        if (!form.title) delete form.title;

        emit("filter", {
            title: form.title,
            status: form.status,
            priority: form.priority,
        });
    },
);
</script>

<template>
    <div class="flex flex-col gap-4 md:flex-row">
        <!-- Search input -->
        <div class="flex-[2]">
            <Input
                placeholder="Search todos..."
                class="w-full"
                icon-leading="search"
                v-model="form.title"
            />
        </div>

        <!-- Status dropdown -->
        <div class="flex-1">
            <Select v-model="status">
                <!-- Button -->
                <template #selectedValue>
                    <SelectButton label="Status">
                        <ColorLabel
                            v-if="status.value"
                            :variant="status.value as Status"
                        />
                        <p class="font-inter text-sm font-medium">
                            {{ status.label }}
                        </p>
                    </SelectButton>
                </template>

                <!-- Options -->
                <SelectOption :value="allValue">
                    <ColorLabel :variant="allValue.value as Status" />
                    <p class="font-inter text-sm font-medium">
                        {{ allValue.label }}
                    </p>
                </SelectOption>
                <SelectOption
                    v-for="status in statuses"
                    :key="status.value"
                    :value="status"
                >
                    <ColorLabel :variant="status.value as Status" />
                    <p class="font-inter text-sm font-medium">
                        {{ status.label }}
                    </p>
                </SelectOption>
            </Select>
        </div>

        <!-- Priority dropdown -->
        <div class="flex-1">
            <Select v-model="priority">
                <!-- Button -->
                <template #selectedValue>
                    <SelectButton label="Priority">
                        <SvgIcon
                            v-if="priority.value"
                            :name="priority.icon as IconType"
                            :class="`${priority.color} h-4 w-5`"
                        />
                        <p class="font-inter text-sm font-medium">
                            {{ priority.label }}
                        </p>
                    </SelectButton>
                </template>

                <!-- Options -->
                <SelectOption :value="allValue">
                    <ColorLabel :variant="allValue.value as Status" />
                    <p class="font-inter text-sm font-medium">
                        {{ allValue.label }}
                    </p>
                </SelectOption>
                <SelectOption
                    v-for="priority in priorities"
                    :key="priority.value"
                    :value="priority"
                >
                    <SvgIcon
                        :name="priority.icon as IconType"
                        :class="`h-5 w-5 ${priority.color}`"
                    />
                    <p class="font-inter text-sm font-medium">
                        {{ priority.label }}
                    </p>
                </SelectOption>
            </Select>
        </div>
    </div>
</template>
