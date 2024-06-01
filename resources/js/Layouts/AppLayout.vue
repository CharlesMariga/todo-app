<script setup lang="ts">
import Logo from "@/Components/Logo.vue";
import SvgIcon from "@/Components/SvgIcon.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import defaultAvatar from "../../assets/images/default-avatar.png";
import { router } from "@inertiajs/vue3";
import { User } from "@/types/User";
import FlashMessage from "@/Components/FlashMessage.vue";
import { imagePath } from "@/Lib/utils";

function onSubmit() {
    router.post("/logout");
}
</script>

<template>
    <header
        class="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-300 bg-white px-6 py-[18px]"
    >
        <div class="container flex items-center justify-between">
            <!-- Logo -->
            <Logo />

            <!-- Profile dropdown -->
            <div class="flex gap-4">
                <Menu as="div" class="relative" v-slot="{ open }">
                    <div>
                        <MenuButton class="flex items-center gap-1">
                            <span class="sr-only">Open user menu</span>
                            <div class="h-8 w-8">
                                <img
                                    :src="
                                        imagePath(
                                            ($page.props.user as User).avatar,
                                        ) || defaultAvatar
                                    "
                                    height="32"
                                    width="32"
                                    :alt="`${($page.props.user as User).name} avatar photo`"
                                    class="h-full w-full rounded-full object-cover"
                                />
                            </div>
                            <p class="font-poppins text-sm font-medium">
                                {{ ($page.props.user as User).name }}
                            </p>
                            <SvgIcon
                                name="chevron-down"
                                class="h-4 w-4"
                                :class="{
                                    'rotate-180 transition': open,
                                    'rotate-0 transition': !open,
                                }"
                            />
                        </MenuButton>
                    </div>
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
                            <MenuItem as="div" class="flex gap-1 px-4 py-3">
                                <div class="h-10 w-10">
                                    <img
                                        :src="
                                            imagePath(
                                                ($page.props.user as User)
                                                    .avatar,
                                            ) || defaultAvatar
                                        "
                                        alt="Default profile photo"
                                        height="40"
                                        width="40"
                                        class="h-10 w-10 rounded-full object-cover"
                                    />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <h4
                                        class="font-poppins text-sm font-medium"
                                    >
                                        {{ ($page.props.user as User).name }}
                                    </h4>
                                    <p
                                        class="text-wrap font-inter text-xs font-normal text-gray-500"
                                    >
                                        {{ ($page.props.user as User).email }}
                                    </p>
                                </div>
                            </MenuItem>
                            <MenuItem
                                as="div"
                                class="px-4 py-3 hover:bg-gray-100"
                            >
                                <a href="/profile">
                                    <div
                                        class="flex items-center gap-2 font-poppins text-sm font-medium text-gray-900"
                                    >
                                        <SvgIcon name="user" />
                                        <p>Profile</p>
                                    </div>
                                </a>
                            </MenuItem>
                            <form @submit.prevent="onSubmit">
                                <button
                                    type="submit"
                                    class="flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-danger-600 hover:bg-gray-100"
                                >
                                    <SvgIcon name="logout" />
                                    <p>Logout</p>
                                </button>
                            </form>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </header>

    <!-- Main content -->
    <div v-bind="$attrs" class="mx-auto max-w-[954px] pt-[64px]">
        <FlashMessage />
        <slot />
    </div>
</template>
