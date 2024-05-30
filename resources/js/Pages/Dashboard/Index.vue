<script setup lang="ts">
import Button from "@/Components/Button.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Banner from "./Partials/Banner.vue";
import Filter from "./Partials/Filter.vue";
import { Head } from "@inertiajs/vue3";
import Modal from "@/Components/Modal.vue";
import AddTodoForm from "./Partials/AddTodoForm.vue";
import { reactive, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import SvgIcon from "@/Components/SvgIcon.vue";
import Todo from "@/Components/Todo.vue";

const modalOpen = ref(false);

const groupedTodos = reactive([
    {
        title: "Pending",
        key: "pending",
    },
    {
        title: "Complete",
        key: "complete",
    },
    {
        title: "Backlog",
        key: "backlog",
    },
]);

function closeModal() {
    modalOpen.value = false;
}
</script>

<template>
    <Head title="Dashboard" />

    <Modal title="New Todo" :open="modalOpen" @close="closeModal">
        <AddTodoForm @close="closeModal" />
    </Modal>

    <AppLayout>
        <Banner />

        <div class="space-y-4 px-6 lg:px-0">
            <div class="flex items-center justify-between">
                <!-- Heading  -->
                <h1 class="font-poppins text-[32px] font-bold text-gray-900">
                    Todos
                </h1>

                <Button icon-leading="add" @click="modalOpen = true">
                    Add Todo
                </Button>
            </div>

            <!-- Filters -->
            <Filter />
        </div>

        <hr class="mt-4 md:hidden" />

        <!-- Todos -->
        <!-- Without filter -->
        <div class="divide-y divide-gray-300">
            <Disclosure
                v-for="group in groupedTodos"
                :key="group.key"
                as="div"
                v-slot="{ open }"
                class="px-6 py-4 lg:px-0"
            >
                <DisclosureButton
                    class="flex w-full items-center justify-between"
                >
                    <h3 class="font-base font-poppins font-medium md:text-xl">
                        {{ group.title }}
                    </h3>
                    <SvgIcon
                        name="chevron-down"
                        class="h-4 w-4 transition md:h-5 md:w-5"
                        :class="{ 'rotate-180': open, 'rotate-0': !open }"
                    />
                </DisclosureButton>
                <DisclosurePanel as="ul" class="mt-8 md:space-y-4">
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                </DisclosurePanel>
            </Disclosure>
        </div>
        <!-- withFilters -->
    </AppLayout>
</template>
