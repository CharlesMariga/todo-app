<script lang="ts" setup>
import Button from "@/Components/Button.vue";
import FormField from "@/Components/FormField.vue";
import Input from "@/Components/Input.vue";
import InputError from "@/Components/InputError.vue";
import { PageProps } from "@/types/page";
import { useForm, usePage } from "@inertiajs/vue3";
import { ref } from "vue";
import UpdateProfilePhoto from "./UpdateProfilePhoto.vue";
import SectionHeading from "./SectionHeading.vue";

const props = usePage<Required<PageProps>>().props;
const loading = ref(false);

const form = useForm({
    name: props.user.name || "",
    email: props.user.email || "",
});

function updateUserDetails() {
    loading.value = true;
    form.clearErrors();
    form.post(`/users/${usePage<Required<PageProps>>().props.user.id}`, {
        onFinish() {
            loading.value = false;
        },
    });
}
</script>

<template>
    <div class="space-y-4">
        <SectionHeading>Profile</SectionHeading>

        <UpdateProfilePhoto />

        <form @submit.prevent="updateUserDetails" class="space-y-4">
            <FormField>
                <Input
                    id="name"
                    label="Name"
                    v-model="form.name"
                    class="w-full"
                />
                <InputError v-if="$page.props.errors.name">{{
                    $page.props.errors.name
                }}</InputError>
            </FormField>

            <FormField>
                <Input
                    id="email"
                    label="Email"
                    v-model="form.email"
                    class="w-full"
                    type="email"
                    disabled
                />
            </FormField>

            <div class="flex justify-end">
                <Button
                    type="submit"
                    :loading="loading"
                    :disabled="!form.name || !form.email"
                >
                    Save Changes
                </Button>
            </div>
        </form>
    </div>
</template>
