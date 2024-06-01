<script lang="ts" setup>
import Button from "@/Components/Button.vue";
import SectionHeading from "./SectionHeading.vue";
import { usePage } from "@inertiajs/vue3";
import { User } from "@/types/User";

const props = usePage<{ user: User }>().props;
</script>

<template>
    <div class="space-y-4">
        <SectionHeading>Oauth</SectionHeading>

        <div class="max-w-[226px] space-y-4">
            <Button
                icon-leading="google"
                variant="tertiary"
                :disabled="!!props.user.google_id"
                class="w-full"
                href="/auth/google/redirect"
            >
                {{ props.user.google_id ? "Connected" : "Connect" }}
                with Google
            </Button>

            <Button
                icon-leading="facebook"
                :disabled="!!props.user.facebook_id"
                class="w-full"
            >
                {{ props.user.google_id ? "Connected" : "Connect" }}
                with Facebook
            </Button>
        </div>
    </div>
</template>
