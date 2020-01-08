<!doctype html>
<html lang="sk">
<head>
    <meta charset="utf-8">
    <meta name="referrer" content="no-referrer">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="author" content="{{ config('app.author') }}">
    <meta name="description" content="{{ config('app.description') }}">

    <meta property="og:title" content="{{ config('app.name') }}">
    <meta property="og:description" content="{{ config('app.description') }}">

    {{--  TODO --}}
    <link rel="icon" type="image/png" href="">
    <link rel="apple-touch-icon" href="">

    <title>{{ config('app.name') }}</title>

    <style>
        @keyframes rot {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(270deg);
            }
        }

        @keyframes dash {
            0% {
                stroke-dashoffset: 187;
            }
            50% {
                stroke-dashoffset: 46.75;
                transform: rotate(135deg);
            }
            100% {
                stroke-dashoffset: 187;
                transform: rotate(450deg);
            }
        }
    </style>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
<div id="app">
    <App>
        <svg
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
            style="animation: rot 1.4s linear infinite; position: fixed; z-index: 99; margin: auto; left: 0; top: 0; right: 0; bottom: 0;"
        >
            <circle
                fill="none"
                stroke-width="6"
                stroke-linecap="round"
                cx="33"
                cy="33"
                r="30"
                style="stroke-dasharray: 187; stroke-dashoffset: 0; transform-origin: center;stroke: #daa900;animation:dash 1.4s ease-in-out infinite;"
            ></circle>
        </svg>
    </App>
</div>
</body>
</html>
