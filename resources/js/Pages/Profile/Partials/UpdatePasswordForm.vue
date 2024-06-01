<script lang="ts" setup>
import FormField from "@/Components/FormField.vue";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import SectionHeading from "./SectionHeading.vue";
import InputError from "@/Components/InputError.vue";
import { computed, ref } from "vue";
import { PageProps } from "@/types/page";

const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
})!;

const loading = ref(false);

const buttonIsDisabled = computed(
    () =>
        !form.current_password || !form.password || !form.password_confirmation,
);

const loggedInWithOuth = computed(() => {
    const user = usePage<PageProps>().props.user;
    return !!user.google_id || !!user.facebook_id;
});

function updatePassword() {
    loading.value = true;
    form.patch("/update-password", {
        preserveScroll: true,
        onSuccess() {
            loading.value = false;
            form.reset();
        },
    });
}
</script>

<template>
    <div class="space-y-4">
        <SectionHeading>Password</SectionHeading>

        <form @submit.prevent="updatePassword" class="space-y-4">
            <FormField>
                <Input
                    id="current_password"
                    label="Current Password"
                    v-model="form.current_password"
                    class="w-full"
                    type="password"
                    :disabled="loggedInWithOuth"
                />
                <InputError v-if="$page.props.errors.current_password">
                    {{ $page.props.errors.current_password }}
                </InputError>
            </FormField>

            <FormField>
                <Input
                    id="newPassword"
                    label="New Password"
                    v-model="form.password"
                    class="w-full"
                    type="password"
                    :disabled="loggedInWithOuth"
                />
                <InputError v-if="$page.props.errors.password">
                    {{ $page.props.errors.password }}
                </InputError>
            </FormField>

            <FormField>
                <Input
                    id="confirmPassword"
                    label="Confirm New Password"
                    v-model="form.password_confirmation"
                    class="w-full"
                    type="password"
                />
                <InputError v-if="$page.props.errors.password_confirmation">
                    {{ $page.props.errors.password_confirmation }}
                </InputError>
            </FormField>

            <div class="flex justify-end">
                <Button
                    type="submit"
                    :disabled="buttonIsDisabled || loggedInWithOuth"
                    :loading="loading"
                >
                    Reset Password
                </Button>
            </div>
        </form>
    </div>
</template>
