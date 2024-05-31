<script setup lang="ts">
import Stat from "../../../Components/Stat.vue";
import defaultAvatarLarge from "../../../../assets/images/default-avatar-lg.png";
import { User } from "@/types/User";
import { GroupedTodos, Todo } from "@/types/todos";
import { usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const props = usePage<{ todos: Todo[]; groupedTodos: GroupedTodos }>().props;

const highestPrioritiesTodo = computed(() => {
    const todos = props?.todos?.filter((todo) => todo.priority === "highest");
    return todos?.length || 0;
});

const mediumPrioritiesTodo = computed(() => {
    const todos = props?.todos?.filter((todo) => todo.priority === "medium");
    return todos?.length || 0;
});

const lowPrioritiesTodo = computed(() => {
    const todos = props?.todos?.filter((todo) => todo.priority === "low");
    return todos?.length || 0;
});
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
            <Stat
                variant="pending"
                :value="`${($page.props.groupedTodos as GroupedTodos).pending?.length || 0}`"
                :highest="highestPrioritiesTodo"
                :medium="mediumPrioritiesTodo"
                :low="lowPrioritiesTodo"
            />
            <Stat
                variant="complete"
                :value="`${($page.props?.groupedTodos as GroupedTodos).complete?.length || 0}`"
            />
            <Stat
                variant="backlog"
                :value="`${($page.props?.groupedTodos as GroupedTodos).backlog?.length || 0}`"
            />
        </div>
    </div>
</template>
