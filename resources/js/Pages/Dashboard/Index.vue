<script setup lang="ts">
import Button from "@/Components/Button.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Banner from "./Partials/Banner.vue";
import Filter from "./Partials/Filter.vue";
import { Head, usePage } from "@inertiajs/vue3";
import Modal from "@/Components/Modal.vue";
import AddTodoForm from "./Partials/AddTodoForm.vue";
import { computed, reactive, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import SvgIcon from "@/Components/SvgIcon.vue";
import Todo from "@/Components/Todo.vue";
import { FilterObj, GroupedTodos, Todo as TodoType } from "@/types/todos";
import { Status } from "@/types/Status";

const modalOpen = ref(false);
const groupedTodos = reactive([
    {
        title: "Pending",
        key: "pending",
    },
    {
        title: "Backlog",
        key: "backlog",
    },
    {
        title: "Complete",
        key: "complete",
    },
]);
const hasFilters = ref(false);
const filterObj = ref<FilterObj>();
const todoToEdit = ref<TodoType>();

function closeModal() {
    todoToEdit.value = undefined;
    modalOpen.value = false;
}

function filter({ title, status, priority }: FilterObj) {
    hasFilters.value = !!title || !!status || !!priority;
    filterObj.value = { title, status, priority };
}

const filteredTodos = computed(() => {
    let filteredTodos = usePage().props.todos as TodoType[];

    if (filterObj.value?.title) {
        filteredTodos = filteredTodos.filter((todo) =>
            todo.title.includes(filterObj.value?.title || ""),
        );
    }

    if (filterObj.value?.status) {
        filteredTodos = filteredTodos.filter(
            (todo) => todo.status === filterObj.value?.status,
        );
    }

    if (filterObj.value?.priority) {
        filteredTodos = filteredTodos.filter(
            (todo) => todo.priority === filterObj.value?.priority,
        );
    }

    return filteredTodos;
});

function editTodo(todo: TodoType) {
    todoToEdit.value = todo;
    modalOpen.value = true;
}
</script>

<template>
    <Head title="Dashboard" />

    <Modal title="New Todo" :open="modalOpen" @close="closeModal">
        <AddTodoForm :todo="todoToEdit" @close="closeModal" />
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
            <Filter @filter="filter" />
        </div>

        <hr class="mt-4 md:hidden" />

        <!-- Todos -->
        <!-- Without filter -->
        <div v-if="!hasFilters" class="divide-y divide-gray-300">
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
                    <Todo
                        v-for="todo in (
                            $page.props.groupedTodos as GroupedTodos
                        )[group.key as Status]"
                        :todo="todo"
                        :key="todo.title"
                        @edit="editTodo"
                    />
                </DisclosurePanel>
            </Disclosure>
        </div>
        <!-- withFilters -->
        <ul v-else class="mt-4 space-y-4">
            <Todo
                v-if="filteredTodos.length"
                v-for="todo in filteredTodos"
                :todo="todo"
                :key="todo.title"
                @edit="editTodo"
            />
            <p v-else class="py-6 text-center font-poppins font-medium">
                No results found
            </p>
        </ul>
    </AppLayout>
</template>
