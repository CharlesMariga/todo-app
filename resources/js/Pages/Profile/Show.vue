<script setup lang="ts">
import Button from "@/Components/Button.vue";
import FormField from "@/Components/FormField.vue";
import Input from "@/Components/Input.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { User } from "@/types/User";
import { Head, useForm, usePage } from "@inertiajs/vue3";
import defaultAvatarLg from "../../../assets/images/default-avatar-lg.png";
import SvgIcon from "@/Components/SvgIcon.vue";

const props = usePage<{ user: User }>().props;

const profileForm = useForm({
    name: props.user.name || "",
    email: props.user.email || "",
});

const passwordForm = useForm({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
});
</script>

<template>
    <AppLayout>
        <div class="px-6 lg:px-0">
            <Head title="Profile" />

            <div class="my-4 max-w-[500px] space-y-6">
                <!-- Profile section -->
                <div class="space-y-4">
                    <h3 class="font-poppins text-xl font-semibold">Profile</h3>

                    <div class="relative inline-block">
                        <img
                            :src="
                                ($page.props.user as User).avatar ||
                                defaultAvatarLg
                            "
                            width="100"
                            height="100"
                        />
                        <Input type="image" class="hidden" />
                        <button
                            class="absolute bottom-0 right-0 rounded-full border-2 border-white bg-gray-900 p-2"
                        >
                            <SvgIcon name="camera" class="h-4 w-4 text-white" />
                        </button>
                    </div>

                    <FormField>
                        <Input
                            id="name"
                            label="Name"
                            v-model="profileForm.name"
                            class="w-full"
                        />
                    </FormField>

                    <FormField>
                        <Input
                            id="email"
                            label="Email"
                            v-model="profileForm.email"
                            class="w-full"
                            type="email"
                            disabled
                        />
                    </FormField>

                    <div class="flex justify-end">
                        <Button type="submit" disabled> Save Changes </Button>
                    </div>
                </div>

                <!-- Change password section -->
                <div class="space-y-4">
                    <h3 class="font-poppins text-xl font-semibold">Profile</h3>

                    <FormField>
                        <Input
                            id="currentPassword"
                            label="Current Password"
                            v-model="passwordForm.currentPassword"
                            class="w-full"
                            type="password"
                        />
                    </FormField>

                    <FormField>
                        <Input
                            id="newPassword"
                            label="New Password"
                            v-model="passwordForm.newPassword"
                            class="w-full"
                        />
                    </FormField>

                    <FormField>
                        <Input
                            id="confirmPassword"
                            label="Confirm New Password"
                            v-model="passwordForm.confirmPassword"
                            class="w-full"
                        />
                    </FormField>

                    <div class="flex justify-end">
                        <Button type="submit" disabled> Reset Password </Button>
                    </div>
                </div>

                <!-- Oauth section -->
                <div class="space-y-4">
                    <h3 class="font-poppins text-xl font-semibold">Profile</h3>

                    <Button
                        icon-leading="google"
                        variant="tertiary"
                        :disabled="!!props.user.google_id"
                        class="max-w-max"
                        href="/auth/google/redirect"
                    >
                        {{ props.user.google_id ? "Connected" : "Connect" }}
                        with Google
                    </Button>

                    <Button
                        icon-leading="facebook"
                        :disabled="!!props.user.facebook_id"
                    >
                        {{ props.user.google_id ? "Connected" : "Connect" }}
                        with Facebook
                    </Button>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
