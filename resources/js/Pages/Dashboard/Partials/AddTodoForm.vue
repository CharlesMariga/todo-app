<script setup lang="ts">
import Button from "@/Components/Button.vue";
import ColorLabel from "@/Components/ColorLabel.vue";
import FormField from "@/Components/FormField.vue";
import Input from "@/Components/Input.vue";
import InputError from "@/Components/InputError.vue";
import Label from "@/Components/Label.vue";
import Select from "@/Components/Select.vue";
import SelectOption from "@/Components/SelectOption.vue";
import SvgIcon from "@/Components/SvgIcon.vue";
import { priorities, statuses } from "@/Pages/lib/data";
import { Status } from "@/types/Status";
import { IconType } from "@/types/SvgIconTypes";
import { Todo } from "@/types/todos";
import { router, useForm } from "@inertiajs/vue3";
import { computed, ref, watch } from "vue";

const props = defineProps<{ todo?: Todo }>();

const form = useForm({
    status: "",
    priority: "",
    title: "",
    description: "",
});

const emit = defineEmits<{
    (e: "close"): void;
}>();

const loading = ref(false);
const status = ref(statuses[0]);
const priority = ref(priorities[0]);

const editMode = computed(() => !!props.todo);

watch(
    () => props.todo,
    (val) => {
        status.value =
            statuses.find((status) => status.value === val?.status) ||
            statuses[0];
        priority.value =
            priorities.find((priority) => priority.value === val?.priority) ||
            priorities[0];
        form.title = val?.title || "";
        form.description = val?.description || "";
    },
    { deep: true, immediate: true },
);

function cancel() {
    emit("close");
}

function onSubmit() {
    loading.value = true;
    form.clearErrors();

    form.status = status.value.value;
    form.priority = priority.value.value;

    if (editMode.value) {
        form.patch(`/todos/${props.todo?.id}`, {
            preserveScroll: true,
            onFinish() {
                emit("close");
            },
        });
    } else {
        form.post("/todos", {
            onFinish() {
                emit("close");
            },
        });
    }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="space-y-3">
            <div class="flex gap-3">
                <!-- Status dropdown -->
                <div class="flex-1">
                    <Label for="status" class="font-sourcesans3 text-sm">
                        Status
                    </Label>
                    <FormField>
                        <Select id="status" v-model="status">
                            <!-- Button -->
                            <template #selectedValue>
                                <p class="font-sourcesans3 text-sm">
                                    {{ status.label }}
                                </p>
                            </template>

                            <!-- Options -->
                            <SelectOption
                                v-for="status in statuses"
                                :value="status"
                                :key="status.value"
                            >
                                <ColorLabel :variant="status.value as Status" />
                                <p class="font-inter text-sm font-medium">
                                    {{ status.label }}
                                </p>
                            </SelectOption>
                        </Select>
                        <InputError v-if="form.errors.status">
                            {{ form.errors.status }}
                        </InputError>
                    </FormField>
                </div>

                <!-- Priority dropdown -->
                <div class="flex-1">
                    <Label for="priority" class="font-sourcesans3 text-sm">
                        Priority
                    </Label>
                    <FormField>
                        <Select id="priority" v-model="priority">
                            <!-- Button -->
                            <template #selectedValue>
                                <p class="font-sourcesans3 text-sm">
                                    {{ priority.label }}
                                </p>
                            </template>

                            <!-- Options -->
                            <SelectOption
                                v-for="priority in priorities"
                                :value="priority"
                                :key="priority.value"
                            >
                                <SvgIcon
                                    v-if="priority.icon"
                                    :name="priority.icon as IconType"
                                    :class="`h-5 w-5 ${priority.color}`"
                                />
                                <p class="font-inter text-sm font-medium">
                                    {{ priority.label }}
                                </p>
                            </SelectOption>
                        </Select>
                        <InputError v-if="form.errors.status">
                            {{ form.errors.status }}
                        </InputError>
                    </FormField>
                </div>
            </div>

            <!-- Todo title -->
            <FormField>
                <Input
                    label="Todo Title"
                    id="title"
                    class="w-full"
                    v-model="form.title"
                />
                <InputError v-if="form.errors.title">
                    {{ form.errors.title }}
                </InputError>
            </FormField>

            <!-- Todo description -->
            <div>
                <Label for="description" class="font-sourcesans3 text-sm">
                    Todo Description
                </Label>
                <FormField>
                    <textarea
                        id="description"
                        rows="3"
                        class="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-primary-600"
                        v-model="form.description"
                    ></textarea>
                    <InputError v-if="form.errors.description">
                        {{ form.errors.description }}
                    </InputError>
                </FormField>
            </div>

            <div class="flex justify-end gap-3 pt-3">
                <Button
                    type="button"
                    role="button"
                    variant="tertiary"
                    @click="cancel"
                >
                    Cancel
                </Button>
                <Button type="submit" :loading="loading">{{
                    editMode ? "Update Todo" : "Create Todo"
                }}</Button>
            </div>
        </div>
    </form>
</template>
