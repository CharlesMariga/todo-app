@props(['title' => 'TaskManager', 'head' => null])


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'TaskManager') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&family=Poppins:wght@400;500;600;700&family=Source+Sans+3:wght@200..900&display=swap"
        rel="stylesheet">


    <!-- Styles -->
    @vite('resources/css/app.css')
    @vite('resources/js/app.ts')

    @if ($head)
        {{ $head }}
    @endif
</head>

<body class="min-h-dvh">
    {{ $slot }}
</body>

</html>
