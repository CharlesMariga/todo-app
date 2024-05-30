<script setup lang="ts">
import Stat from "../../../Components/Stat.vue";
import defaultAvatarLarge from "../../../../assets/images/default-avatar-lg.png";
import { User } from "@/types/User";
</script>

<template>
    <div class="flex flex-col justify-between gap-3 p-6 md:flex-row lg:px-0">
        <div class="flex items-center gap-2">
            <div class="h-[72px] w-[72px]">
                <img
                    :src="
                        ($page.props.user as User).avatar || defaultAvatarLarge
                    "
                    :alt="`${($page.props.user as User).name} avatar photo`"
                    height="40"
                    width="40"
                    class="h-[72px] w-[72px] rounded-full"
                />
            </div>
            <div class="space-y-1">
                <h4 class="font-poppins text-xl font-semibold text-gray-900">
                    {{ ($page.props.user as User).name }}
                </h4>
                <p class="font-inter text-base font-normal text-gray-500">
                    {{ ($page.props.user as User).email }}
                </p>
            </div>
        </div>
        <div class="flex gap-3">
            <Stat variant="pending" value="6" highest="2" medium="3" low="1" />
            <Stat variant="complete" value="12" />
            <Stat variant="backlog" value="6" />
        </div>
    </div>
</template>
