<script setup lang="ts">
import Input from "@/Components/Input.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import Button from "@/Components/Button.vue";
import AuthenticationCard from "./Partials/AuthenticationCard.vue";
import FormField from "@/Components/FormField.vue";
import InputError from "@/Components/InputError.vue";
import { ref } from "vue";

const form = useForm({
    email: "",
    password: "",
});

const formLoading = ref(false);

function handleSubmit() {
    formLoading.value = true;
    form.post("login", {
        preserveState: true,
        onFinish() {
            formLoading.value = false;
        },
    });
}
</script>

<template>
    <Head title="Login" />

    <AuthLayout class="justify-center">
        <AuthenticationCard>
            <template #title> Login with your email </template>

            <form class="grid gap-4" @submit.prevent="handleSubmit">
                <FormField>
                    <Input
                        label="Email"
                        id="email"
                        class="sm:min-w-[452px]"
                        v-model="form.email"
                    />
                    <InputError v-if="form.errors.email">
                        {{ form.errors.email }}
                    </InputError>
                </FormField>

                <FormField>
                    <Input
                        label="Password"
                        id="password"
                        class="sm:min-w-[452px]"
                        type="password"
                        v-model="form.password"
                    />
                    <InputError v-if="form.errors.password">
                        {{ form.errors.password }}
                    </InputError>
                </FormField>
                <p
                    class="text-right font-inter text-sm font-medium text-gray-500"
                >
                    Forgot password?
                    <a href="#" class="text-primary-600">Reset</a>
                </p>
                <Button size="lg" type="submit" :loading="formLoading"
                    >Login</Button
                >
            </form>
            <p
                class="!mt-4 text-center font-inter text-sm font-medium text-gray-500"
            >
                Don't have an account?
                <Link href="/register" class="text-primary-600">Register</Link>
            </p>
        </AuthenticationCard>
    </AuthLayout>
</template>
