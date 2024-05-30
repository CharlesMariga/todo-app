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
import { ref } from "vue";

const status = ref({});

const priority = ref({});
</script>

<template>
    <div class="flex flex-col gap-4 md:flex-row">
        <!-- Search input -->
        <div class="flex-[2]">
            <Input
                placeholder="Search todos..."
                class="w-full"
                icon-leading="search"
            />
        </div>

        <!-- Status dropdown -->
        <div class="flex-1">
            <Select v-model="status">
                <!-- Button -->
                <template #selectedValue>
                    <SelectButton label="Status">
                        <ColorLabel variant="pending" />
                        <p class="font-inter text-sm font-medium">Pending</p>
                    </SelectButton>
                </template>

                <!-- Options -->
                <SelectOption v-for="status in statuses" :key="status.value">
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
                    <SelectButton label="Status">
                        <ColorLabel variant="pending" />
                        <p class="font-inter text-sm font-medium">Pending</p>
                    </SelectButton>
                </template>

                <!-- Options -->
                <SelectOption
                    v-for="priority in priorities"
                    :key="priority.value"
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
