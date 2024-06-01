<script setup lang="ts">
import { Link, Head } from "@inertiajs/vue3";
import Button from "../Components/Button.vue";
import AuthLayout from "../Layouts/AuthLayout.vue";
</script>

<template>
    <Head title="Get Started" />
    <AuthLayout class="justify-center">
        <div class="space-y-4">
            <div class="space-y-1">
                <h1
                    class="font-poppins text-2xl font-semibold capitalize tracking-wide text-gray-900"
                >
                    Create account
                </h1>
                <p class="font-inter text-base font-normal text-gray-500">
                    Create an account to start managing your tasks.
                </p>
            </div>
            <div class="flex flex-col gap-4">
                <Button
                    type="submit"
                    variant="tertiary"
                    icon-leading="google"
                    class="w-full"
                    href="/auth/google/redirect"
                >
                    Continue with Google
                </Button>
                <Button
                    variant="secondary"
                    icon-leading="facebook"
                    class="w-full"
                    href="/auth/facebook/redirect"
                >
                    Continue with Facebook
                </Button>
                <Button href="/register">Continue with Email</Button>
            </div>
            <p class="text-center font-inter text-sm font-medium text-gray-500">
                Already have an account?
                <Link href="/login" class="text-primary-600">Login</Link>
            </p>
        </div>
    </AuthLayout>
</template>
