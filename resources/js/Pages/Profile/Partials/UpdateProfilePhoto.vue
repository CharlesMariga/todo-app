<script setup lang="ts">
import { User } from "@/types/User";
import defaultAvatarLg from "../../../../assets/images/default-avatar-lg.png";
import { router, useForm, usePage } from "@inertiajs/vue3";
import { PageProps } from "@/types/page";
import { ref } from "vue";
import SvgIcon from "@/Components/SvgIcon.vue";
import { imagePath } from "@/Lib/utils";

const fileInput = ref(null);
const profilePictureUrl = ref("");

function openFileInput() {
    if (fileInput.value) {
        (fileInput.value as HTMLInputElement).click();
    }
}

function handleFileChange(e: Event) {
    const file = (e?.target as HTMLInputElement & EventTarget)?.files?.[0];
    if (file) {
        profilePictureUrl.value = URL.createObjectURL(file);

        const form = useForm({ avatar: file });
        form.post(`/users/${usePage<Required<PageProps>>().props.user.id}`);
    }
}
</script>

<template>
    <div class="relative inline-block">
        <div class="h-[100px] w-[100px] rounded-full">
            <img
                :src="
                    profilePictureUrl ||
                    imagePath(($page.props.user as User).avatar) ||
                    defaultAvatarLg
                "
                class="h-full w-full rounded-full object-cover"
            />
        </div>
        <input
            ref="fileInput"
            type="file"
            class="hidden"
            @change="handleFileChange"
        />
        <button
            @click="openFileInput"
            class="absolute bottom-0 right-0 z-10 rounded-full border-2 border-white bg-gray-900 p-2"
        >
            <SvgIcon name="camera" class="h-4 w-4 text-white" />
        </button>
    </div>
</template>
