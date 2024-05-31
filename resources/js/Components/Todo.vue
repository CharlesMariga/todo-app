<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import SvgIcon from "./SvgIcon.vue";
import TodoTag from "./TodoTag.vue";
import { Todo } from "@/types/todos";
import { useForm } from "@inertiajs/vue3";
import { Status } from "@/types/Status";
import { Todo as TodoType } from "@/types/todos";
import { formatDate } from "@/Lib/utils";

interface TodoProps {
    todo: Todo;
}

const props = defineProps<TodoProps>();
const emit = defineEmits<{
    (e: "edit", payload: TodoType): void;
}>();

const form = useForm({ ...props.todo });

function markAsDone(status: Status) {
    form.status = status;

    form.patch(`/todos/${props.todo.id}`);
}

function deleteTodo() {
    form.delete(`/todos/${props.todo.id}`);
}
</script>

<template>
    <li
        class="space-y-2 border-gray-100 py-4 md:rounded-[10px] md:border md:p-4 [&:not(:last-child)]:border-b"
    >
        <div class="flex justify-between">
            <div class="space-y-1">
                <h4 class="font-inter text-base font-medium text-gray-900">
                    {{ props.todo.title }}
                </h4>
                <time class="font-inter text-sm font-medium text-gray-500">
                    {{ formatDate(props.todo.created_at) }}
                </time>
            </div>
            <Menu as="div" class="relative">
                <MenuButton>
                    <SvgIcon name="ellipsis" class="h-5 w-5 text-gray-900" />
                </MenuButton>
                <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                >
                    <MenuItems
                        class="absolute right-0 z-10 mt-2 w-[250px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <MenuItem
                            as="button"
                            class="flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-success-600 hover:bg-gray-100"
                            @click="markAsDone('complete')"
                        >
                            <SvgIcon name="check-circle" class="h-5 w-5" />
                            <p>Mark as done</p>
                        </MenuItem>

                        <MenuItem
                            as="button"
                            class="flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-gray-900 hover:bg-gray-100"
                            @click="markAsDone('backlog')"
                        >
                            <SvgIcon name="back" class="h-5 w-5" />
                            <p>Move to backlog</p>
                        </MenuItem>
                        <MenuItem
                            as="button"
                            class="flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-gray-900 hover:bg-gray-100"
                            @click="emit('edit', props.todo)"
                        >
                            <SvgIcon name="pencil-line" class="h-5 w-5" />
                            <p>Edit</p>
                        </MenuItem>
                        <MenuItem
                            as="button"
                            class="flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-danger-600 hover:bg-gray-100"
                            @click="deleteTodo"
                        >
                            <SvgIcon name="trash" class="h-5 w-5" />
                            <p>Delete</p>
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
        <p class="font-inter text-sm font-normal">
            {{ props.todo.description }}
        </p>
        <div class="flex gap-3">
            <TodoTag type="status" :status-variant="props.todo.status" />
            <TodoTag type="priority" :priority-variant="props.todo.priority" />
        </div>
    </li>
</template>
