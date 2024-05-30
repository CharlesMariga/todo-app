<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import SvgIcon from "./SvgIcon.vue";
import TodoTag from "./TodoTag.vue";
</script>

<template>
    <li
        class="space-y-2 border-gray-100 py-4 md:rounded-[10px] md:border md:p-4 [&:not(:last-child)]:border-b"
    >
        <div class="flex justify-between">
            <div class="space-y-1">
                <h4 class="font-inter text-base font-medium text-gray-900">
                    Gym workout
                </h4>
                <time class="font-inter text-sm font-medium text-gray-500"
                    >Mar 25th 2024</time
                >
            </div>
            <Menu as="div" class="relative" v-slot="{ open }">
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
                            as="div"
                            class="flex cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-success-600 hover:bg-gray-100"
                        >
                            <SvgIcon name="check-circle" class="h-5 w-5" />
                            <p>Mark as done</p>
                        </MenuItem>
                        <MenuItem
                            as="div"
                            class="flex cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-gray-900 hover:bg-gray-100"
                        >
                            <SvgIcon name="back" class="h-5 w-5" />
                            <p>Move to backlog</p>
                        </MenuItem>
                        <MenuItem
                            as="div"
                            class="flex cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-gray-900 hover:bg-gray-100"
                        >
                            <SvgIcon name="pencil-line" class="h-5 w-5" />
                            <p>Edit</p>
                        </MenuItem>
                        <MenuItem
                            as="div"
                            class="flex cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-danger-600 hover:bg-gray-100"
                        >
                            <SvgIcon name="trash" class="h-5 w-5" />
                            <p>Delete</p>
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
        <p class="font-inter text-sm font-normal">
            Attend the evening gym session focusing on cardio and strength
            training.
        </p>
        <div class="flex gap-3">
            <TodoTag type="status" status-variant="pending" />
            <TodoTag type="priority" priority-variant="high" />
        </div>
    </li>
</template>
