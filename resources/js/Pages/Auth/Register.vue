<script setup lang="ts">
import Button from "@/Components/Button.vue";
import Input from "@/Components/Input.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import AuthenticationCard from "./Partials/AuthenticationCard.vue";
import FormField from "@/Components/FormField.vue";
import InputError from "@/Components/InputError.vue";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

function handleSubmit() {
    form.post("register", {
        preserveState: true,
        onFinish() {
            form.reset("name", "email", "password", "password_confirmation");
        },
    });
}
</script>

<template>
    <Head title="Register" />

    <AuthLayout class="sm:justify-center">
        <AuthenticationCard>
            <template #title> Register using your email </template>

            <form class="grid gap-4" @submit.prevent="handleSubmit">
                <!-- Name -->
                <FormField>
                    <Input
                        id="name"
                        label="Name"
                        class="sm:min-w-[452px]"
                        v-model="form.name"
                        required
                    />
                    <InputError v-if="form.errors.name">
                        {{ form.errors.name }}
                    </InputError>
                </FormField>

                <!-- Email -->
                <FormField>
                    <Input
                        id="email"
                        type="email"
                        class="sm:min-w-[452px]"
                        label="Email"
                        v-model="form.email"
                        required
                    />
                    <InputError v-if="form.errors.email">
                        {{ form.errors.email }}
                    </InputError>
                </FormField>

                <!-- Password -->
                <FormField>
                    <Input
                        id="password"
                        class="sm:min-w-[452px]"
                        type="password"
                        label="Password"
                        v-model="form.password"
                        required
                    />
                    <InputError v-if="form.errors.password">
                        {{ form.errors.password }}
                    </InputError>
                </FormField>

                <!-- Confirm password -->
                <FormField>
                    <Input
                        id="confirmPassword"
                        class="sm:min-w-[452px]"
                        type="password"
                        label="Confirm Password"
                        v-model="form.password_confirmation"
                        required
                    />
                    <InputError v-if="form.errors.password_confirmation">
                        {{ form.errors.password_confirmation }}
                    </InputError>
                </FormField>
                <Button size="lg" type="submit">Create Account</Button>
            </form>
            <p
                class="!mt-4 text-center font-inter text-sm font-medium text-gray-500"
            >
                Already have an account?
                <Link href="/login" class="text-primary-600">Login</Link>
            </p>
        </AuthenticationCard>
    </AuthLayout>
</template>
