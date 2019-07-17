<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}" >
    <title>[SW/CH] | The Songwriting Challenge</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="{{ Auth::user() ? 'user--logged-in' : 'no-user' }} {{ empty($body_class) ? '' : $body_class }}">
    <div id="app">
        <header id="main-header">
            <nav class="main-nav">
                <div class="container flex flex--justify-space-between flex--align-center">
                    <a class="logo" href="{{ url('/') }}">
                        <svg id="Layer_1" width="74" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.1 40"><path fill="#ffffff" d="M31.7 34.1l1.5-11.4L30.5 5h-4.6l-2.3 14.6L21.5 5h-4.6l4.8 29.1h4.2l2.4-15.9 2.5 15.9zM38 0l-5.4 40h3.9l5.9-40zM14.5 26.9c0 2-.5 3.8-1.6 5.2-.7 1-1.8 1.7-3 2.1-.8.2-1.6.3-2.4.3-1.7 0-3.2-.4-4.3-1.3-1-.7-1.7-1.7-2.2-2.8-.6-1.3-.9-2.7-1-4.1l4.2-.3c.2 1.7.6 2.9 1.4 3.7.4.5 1.1.8 1.8.8 1 0 1.7-.5 2.3-1.4.3-.5.4-1.1.4-1.9 0-1.2-.5-2.4-1.6-3.6-.9-.8-2.2-2-3.9-3.7C3.1 18.4 2 17.1 1.4 16c-.7-1.3-1-2.7-1-4.1 0-2.6.9-4.7 2.7-6 1.1-.8 2.5-1.2 4.1-1.2 1.6 0 2.9.4 4 1.1.9.6 1.6 1.4 2.1 2.3.6 1 .9 2.2 1 3.4l-4.2.8c-.1-1.2-.5-2.1-1-2.8-.4-.5-1-.7-1.7-.7-.8-.2-1.5.2-1.9.9-.4.6-.5 1.4-.5 2.1 0 1.3.6 2.7 1.7 4.1.6.7 1.2 1.3 1.9 1.9 1 .9 1.7 1.4 2 1.8 1 1 1.8 2 2.5 3.2.3.4.5.9.7 1.4.4.8.7 1.7.7 2.7zM49.5 34.5c-3.8 0-6.9-3.1-7-6.9v-16c0-1.9.7-3.6 2-4.9 2.7-2.7 7.1-2.7 9.8 0 1.3 1.3 2 3.1 2 4.9v3.3h-4.5v-3.4c0-1.4-1.1-2.5-2.5-2.5-.7 0-1.3.3-1.8.7-.5.5-.7 1.1-.7 1.8v16c0 1.4 1.1 2.5 2.5 2.5.7 0 1.3-.3 1.8-.7.5-.5.8-1.1.7-1.8v-4h4.5v4.1c.2 3.8-2.9 6.9-6.8 6.9zM64.4 21.8v12.3H60V5h4.4v12.4h5.3V5h4.4v29.1h-4.4V21.8h-5.3z"/></svg>
                    </a>
                    <div class="main-nav__user-links flex">
                        @if(Auth::check())
                        @if(Auth::user()->type == 'admin')
                        <a class="main-nav__admin-link" href="/admin">Admin</a>
                        @endif 
                        <div class="top-search-wrapper small--hide">
                            <form method="GET" action="/search" id="top-search">                               
                                <input id="ts" type="text" placeholder="Search" name="q" value="" autocomplete="off"> 
                                <input class="hidden" type="submit" value="Submit"> 
                            </form> 
                            <div id="top-search-results">

                            </div>
                        </div>
                        <div class="main-nav__user-wrapper flex">
                            <a class="main-nav__user-link" href="/{{ Auth::user()->username }}">
                                <img class="tiny-profile-pic" src="/storage/uploads/avatars/{{ Auth::user()->avatar }}" >
                                {{ Auth::user()->getFirstName() }}
                            </a>
                            <div class="user-drop-wrap">
                                <div class="user-drop">
                                    <ul>
                                        <li><a href="/{{ Auth::user()->username }}">View Profile</a></li>
                                        <li><a href="/posts/create">Submit a Song</a></li>
                                        <li><a href="/{{ Auth::user()->username }}/edit">Edit Profile</a></li>
                                        <li><a href="/search">Search</a></li>
                                        <li><a href="/logout">Log Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        @else 
                        <a class="main-nav__sign-up" href="/register">Register</a>
                        <a class="main-nav__login" href="/login">Log In</a>
                        @endif 
                    </div>
                </div>
            </nav>
        </header>
        <div id="fade"></div>
        <main id="main-content" class="py-4 ">
            <div class="container">
                @yield('content')
            </div>
        </main>
        <footer class="main-footer clearfix">
            <div class="container">
                <div class="even-columns small--flex-wrap small--text-center">
                    <div class="even-column">
                        <img src="/images/songwriting-challenge.png" width="100" alt="Songwriting Challenge">
                    </div>
                    <div class="even-column">
                        <h4>Profile</h4>
                        <ul>
                            @if (Auth::user()) 
                            <li><a href="/{{ Auth::user()->username }}">View Profile</a></li>
                            <li><a href="/posts/create">Submit a Song</a></li>
                            <li><a href="/{{ Auth::user()->username }}/edit">Edit Profile</a></li>
                            <li><a href="/search">Search</a></li>
                            <li><a href="/logout">Log Out</a></li>
                            @else
                            <li><a href="/login">Log In</a></li>
                            <li><a href="/register">Register</a></li>
                            @endif
                        </ul>
                    </div>
                    <div class="even-column">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="even-column">
                        <h4>Stay up-to-date</h4>
                        <form class="footer-signup flex" action="" method="POST">
                            <input type="text" value="" name="email" placeholder="Email">
                            <button class="btn btn--dark" type="submit">Sign up!</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <!-- Scripts -->
    <script src="{{ asset('js/jquery-3.4.1.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
