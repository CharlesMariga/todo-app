<x-layout>
    <div class="flex flex-col min-h-dvh">
        <header class="px-6 py-[18px]">
            <div class="container flex items-center justify-between">
                <div>
                    <img src="images/logo.png" alt="Taskmanager logo">
                </div>
                <div class="flex gap-4">
                    @guest
                        <a href="/login"
                            class="font-medium font-poppins text-sm py-3 px-4 bg-gray-900 text-white rounded-md inline-block">Login</a>
                        <a href="/get-started"
                            class="font-medium font-poppins text-sm py-3 px-4 bg-primary-600 text-white rounded-md lg:inline-block hidden">Get
                            Started</a>
                    @endguest

                    @auth
                        <a href="/dashboard" class="font-bold font-poppins text-sm py-3 px-4  text-gray-900 tracking-wide">
                            Dashboard</a>
                        <form method="POST" action="/logout">
                            @csrf
                            <button type="submit"
                                class="font-bold font-poppins text-sm py-3 px-4  text-red-600 tracking-wide">
                                Logout</button>
                        </form>
                    @endauth
                </div>
            </div>
        </header>

        <main class="container flex-1 lg:flex">
            <div class="flex flex-col lg:max-w-md xl:max-w-xl 2xl:max-w-2xl justify-center">
                <div class="flex flex-col gap-6">
                    <h1 class="text-gray-900 font-poppins py-6 font-bold text-5xl leading-[1.4] tracking-wide px-6">
                        Simplify Your
                        Workflow with TaskManager</h1>
                    <div class="space-y-6 px-6">
                        <picture class="w-[80vw]">
                            <source media="(min-width: 640px)" srcset="images/hero-lg.png" />
                            <img src="images/hero-sm.png" class="lg:hidden ml-auto -mr-6 w-full"
                                alt="Small hero image" />
                        </picture>

                        <p class="font-normal text-lg font-inter text-gray-500">Welcome to TaskManager, your ultimate
                            solution for efficient task management. Designed individuals, TaskManager streamlines your
                            projects, deadlines, and daily to-dos with intuitive features and seamless integration.
                            Boost
                            your productivity, stay organized, and achieve more with less effort. Try TaskManager today
                            and
                            transform the way you work!</p>
                        <a href="/get-started"
                            class="mt-6 font-medium text-sm py-3 font-poppins px-4 bg-primary-600 text-white rounded-md lg:inline-block">Get
                            Started </a>
                    </div>
                </div>
            </div>
            <div class="hidden bg-blue-500 mt-16 lg:block lg:mt-[16vh] lg:mr-0 lg:ml-20 xl:mt-[14vh] lg:flex-none">
                <img src="images/hero-lg.png" class="absolute right-0 inline-block lg:max-w-xl xl:max-w-2xl"
                    alt="Large hero image">
            </div>
        </main>

        <footer class="container p-6">
            <p class="font-inter text-gray-500 font-medium text-sm">&copy; TaskManager 2024</p>
        </footer>
    </div>
</x-layout>
