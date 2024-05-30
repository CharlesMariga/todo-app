<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import SvgIcon from "./SvgIcon.vue";

interface ModalProps {
    open?: boolean;
    title: string;
}

const emit = defineEmits<{
    (e: "close"): void;
}>();

const props = withDefaults(defineProps<ModalProps>(), {
    open: false,
});

function closeModal() {
    emit("close");
}
</script>

<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="closeModal">
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0"
                >
                    <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel
                            class="relative min-h-dvh w-screen transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:min-h-full sm:w-full sm:max-w-[400px] sm:rounded-lg"
                        >
                            <header
                                class="flex items-center justify-between border-b border-gray-300 px-4 py-3"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="font-poppins text-xl font-semibold"
                                >
                                    {{ props.title }}
                                </DialogTitle>
                                <button
                                    class="rounded-full bg-gray-100 p-2"
                                    @click="closeModal"
                                >
                                    <SvgIcon
                                        name="cross"
                                        class="h-4 w-4 text-gray-900"
                                    />
                                </button>
                            </header>
                            <div class="px-4 pb-3 pt-4">
                                <slot />
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
