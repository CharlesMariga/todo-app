<script setup lang="ts">
import Button from "@/Components/Button.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { User } from "@/types/User";
import { Head, useForm, usePage } from "@inertiajs/vue3";
import UpdateProfilePhoto from "./Partials/UpdateProfilePhoto.vue";
import UpdateProfileDetials from "./Partials/UpdateProfileDetails.vue";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm.vue";
import OAuth from "./Partials/OAuth.vue";
</script>

<template>
    <AppLayout>
        <div class="px-6 lg:px-0">
            <Head title="Profile" />

            <div class="my-4 max-w-[500px] space-y-6">
                <!-- Profile section -->
                <UpdateProfileDetials />

                <!-- Change password section -->
                <UpdatePasswordForm />

                <!-- Oauth section -->
                <OAuth />
            </div>
        </div>
    </AppLayout>
</template>
