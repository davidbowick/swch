<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @if(strpos($_SERVER['REQUEST_URI'], 'admin') !== false)
    <meta name="robots" content="noindex,nofollow" />
    @endif
    <meta rel="manifest" href="{{ asset('manifest.json') }}" />
    <meta name="theme-color" content="#222526" />
    <link rel="icon" type="image/png" href="{{ asset('images/favicon-256.png') }}" sizes="256x256" />
    <link rel="icon" type="image/png" href="{{ asset('images/favicon-128.png') }}" sizes="128x128" />
    <link rel="icon" type="image/png" href="{{ asset('images/favicon-64.png') }}" sizes="64x64" />
    <link rel="icon" type="image/png" href="{{ asset('images/favicon-32.png') }}" sizes="32x32" />
    <link rel="icon" type="image/png" href="{{ asset('images/favicon-32.png') }}">
    {{-- Social --}}
    <meta property="og:title" content="SW/CH | The Songwriting Challenge">
    <meta property="og:description" content="A songwriting community to encourage regular writing by using community-generated prompts.">
    <meta property="og:image" content="https://euro-travel-example.com/thumbnail.jpg">
    <meta property="og:url" content="https://songwritingchallenge.com/">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="SW/CH">
    <meta name="twitter:image:alt" content="Alt text for image">
    {{-- Non-Essential, But Required for Analytics --}}
    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    {{-- <title>The Songwriting Challenge - A Songwriting Community  | SW/CH</title> --}}
    <title>@yield('title','The Songwriting Challenge - A Songwriting Community') | SW/CH</title> 
    {{-- Styles --}}
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="{{ Auth::user() ? 'user--logged-in' : 'no-user' }} {{ empty($body_class) ? '' : $body_class }} template--{{$view_name}}">
    <div id="app">
        <header id="main-header">
            <nav class="main-nav">
                <div class="container flex flex--justify-space-between flex--align-center">
                    <a class="logo" href="{{ url('/') }}">
                        <svg aria-labelledby="swchLogo swchDesc" id="swch-logo" width="59" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.1 40" role="img"><title id="swchLogo">SW/CH Logo</title><desc id="swchDesc">The logo for SW/CH - The Songwriting Challenge</desc></desc><path fill="#ffffff" d="M31.7 34.1l1.5-11.4L30.5 5h-4.6l-2.3 14.6L21.5 5h-4.6l4.8 29.1h4.2l2.4-15.9 2.5 15.9zM38 0l-5.4 40h3.9l5.9-40zM14.5 26.9c0 2-.5 3.8-1.6 5.2-.7 1-1.8 1.7-3 2.1-.8.2-1.6.3-2.4.3-1.7 0-3.2-.4-4.3-1.3-1-.7-1.7-1.7-2.2-2.8-.6-1.3-.9-2.7-1-4.1l4.2-.3c.2 1.7.6 2.9 1.4 3.7.4.5 1.1.8 1.8.8 1 0 1.7-.5 2.3-1.4.3-.5.4-1.1.4-1.9 0-1.2-.5-2.4-1.6-3.6-.9-.8-2.2-2-3.9-3.7C3.1 18.4 2 17.1 1.4 16c-.7-1.3-1-2.7-1-4.1 0-2.6.9-4.7 2.7-6 1.1-.8 2.5-1.2 4.1-1.2 1.6 0 2.9.4 4 1.1.9.6 1.6 1.4 2.1 2.3.6 1 .9 2.2 1 3.4l-4.2.8c-.1-1.2-.5-2.1-1-2.8-.4-.5-1-.7-1.7-.7-.8-.2-1.5.2-1.9.9-.4.6-.5 1.4-.5 2.1 0 1.3.6 2.7 1.7 4.1.6.7 1.2 1.3 1.9 1.9 1 .9 1.7 1.4 2 1.8 1 1 1.8 2 2.5 3.2.3.4.5.9.7 1.4.4.8.7 1.7.7 2.7zM49.5 34.5c-3.8 0-6.9-3.1-7-6.9v-16c0-1.9.7-3.6 2-4.9 2.7-2.7 7.1-2.7 9.8 0 1.3 1.3 2 3.1 2 4.9v3.3h-4.5v-3.4c0-1.4-1.1-2.5-2.5-2.5-.7 0-1.3.3-1.8.7-.5.5-.7 1.1-.7 1.8v16c0 1.4 1.1 2.5 2.5 2.5.7 0 1.3-.3 1.8-.7.5-.5.8-1.1.7-1.8v-4h4.5v4.1c.2 3.8-2.9 6.9-6.8 6.9zM64.4 21.8v12.3H60V5h4.4v12.4h5.3V5h4.4v29.1h-4.4V21.8h-5.3z"/></svg>
                    </a>
                    <div class="main-nav__user-links flex">
                        @if(Auth::check())
                        @if(Auth::user()->type == 'admin')
                        <a class="main-nav__admin-link" href="/admin">
                            <i class="fa fa-cog"></i>
                            <span class="visually-hidden">Admin</span>
                        </a>
                        @endif
                        <a href="#" class="no-link main-nav__search-link">
                            <i class="fa fa-search"></i>
                            <span class="visually-hidden">Search</span>
                        </a> 
                        <div class="top-search-wrapper">
                            <form method="GET" action="/search" id="top-search">
                                <input id="ts" type="text" placeholder="Search" name="q" value="" autocomplete="off">
                                <button class="top-search--submit" type="submit">
                                    <i class="fa fa-search"></i>
                                    <span class="visually-hidden">Search Submit</span>
                                </button>
                            </form> 
                            <div id="top-search-results">
                                <div id="top-search-results__inner"></div>
                            </div>
                        </div>
                        @php 
                        $notificationCount = Auth::user()->unreadNotifications->count();
                        $hasNotifications = $notificationCount > 0 ? true : false;
                        @endphp
                        <div class="main-nav__notifications--wrapper">
                            <div class="main-nav__notifications {{ $hasNotifications ? 'hoverable': '' }}">
                                <a class="main-nav__notifications-link" href="/notifications">
                                    <i class="fa fa-bell"></i>
                                    <span class="has-notifications {{ $hasNotifications ? 'show' : ''}}">{{ $notificationCount }}</span>
                                </a>    
                                <div class="main-nav__notifications-dropdown">
                                    <div class="main-nav__notifications-dropdown__inner">
                                        <div class="main-nav__notifications-header flex flex--align-center flex--justify-space-between">
                                         <h4 class="no-margin"><a href="/notifications">Notifications</a></h4>
                                         <a href="/notifications" class="mark-as-read no-link"><small>Mark all as read</small></a>
                                     </div>
                                     <div class="main-nav__notification-list">
                                        @php
                                        $notification_limit = 5;
                                        @endphp
                                        @if ($hasNotifications)
                                        @foreach (Auth::user()->unreadNotifications()->take($notification_limit)->get() as $notification) 
                                        @php
                                        $n = $notification['data'];
                                        $post = $n['post'];
                                        $post_user = $n['post_user'];
                                        $notified_by = $n['notified_by'];
                                        @endphp
                                        <div class="main-nav__notification">
                                            <a class="no-link mark-single--as-read" href="/notification/{{ $notification['id'] }}/mark-as-read"><i class="fa fa-times"></i></a>
                                            @if ($notification['type'] == 'App\Notifications\LikeNotification')
                                            <a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> liked <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
                                            @else 
                                            <a href="/{{ $post_user['username'] }}/{{$post['slug']}}/comments">{{ $notified_by['name'] }} commented on {{$post['title']}}</a>
                                            @endif
                                        </div>
                                        @endforeach
                                        @endif
                                    </div>
                                </div>
                                @if ($notificationCount > $notification_limit)
                                <a class="view-all--notifications" href="/notifications">View all</a>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="main-nav__user-wrapper flex">
                        <a aria-expanded="false" class="main-nav__user-link" href="/{{ Auth::user()->username }}">
                            <img class="tiny-profile-pic" src="{{s3_avatar_image('small',Auth::user()->avatar)}}" >{{ Auth::user()->getFirstName() }}
                        </a>
                        <div  class="user-drop-wrap">
                            <div class="user-drop">
                                <ul>
                                    <li><a href="/{{ Auth::user()->username }}">View Profile</a></li>
                                    <li><a href="/posts/create">Submit a Song</a></li>
                                    <li><a href="/suggestions">Submit a Prompt</a></li>
                                    <li><a href="/{{ Auth::user()->username }}/edit">Edit Profile</a></li>
                                    <li><a href="/search">Search</a></li>
                                    <li><a class="no-link" href="/logout">Log Out</a></li>
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
        {{-- Global site tag (gtag.js) - Google Analytics --}}
        <script async src="//www.googletagmanager.com/gtag/js?id=UA-146360947-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-146360947-1');
      </script>
    </main>
    <div class="main-preloader" style="display: none;">
        <svg width="30px"  height="30px" aria-labeledby="preloaderLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><title id="preloaderLogo">Preloader</title><circle cx="50" cy="50" fill="none" stroke="#000000" stroke-width="10" r="25" stroke-dasharray="117.80972450961724 41.269908169872416" transform="rotate(41.2639 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle>
        </svg>
    </div>
    <footer class="main-footer clearfix">
        <div class="container">
            <div class="even-columns small--flex-wrap small--text-center">
                <div class="even-column">
                    <img src="/images/songwriting-challenge.png" width="100" alt="">
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
                <div class="even-column newsletter-column">
                    <h4>Stay up-to-date</h4>
                    <form action="https://davidbowick.us12.list-manage.com/subscribe/post-json?u=5035c57f5d2a06c796c105e76&amp;id=754537b934&c=?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate footer-signup" target="_blank" novalidate autocomplete="off">
                        <div class="field flex">
                            <label class="visually-hidden" for="mce-EMAIL">Email Address </label>
                            <input type="email" value="" placeholder="Email Address" name="EMAIL" class="required email" id="mce-EMAIL">
                            <button class="btn btn--dark" type="submit">Sign up!</button>
                        </div>
                        <div id="mce-responses" class="alert">

                        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5035c57f5d2a06c796c105e76_754537b934" tabindex="-1" value=""></div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
<div class="main-player" data-song-id="0">
    <div class="container">
        <div class="flex flex--align-center small--flex--justify-center">
            <audio class="main-player__audio" src=""></audio>
            <div class="main-player__image small--hide"></div>
            <div class="main-player__title"></div>
            <a class="main-player__prompt" href="/prompts/etc"><i class="fa fa-tag"></i> <span class="main-player__prompt-name"></span></a>

            <div class="main-player__playbar-wrapper flex flex--align-center">
                <span class="main-player__current-time small--hide"></span>
                <div class="main-player__playbar">
                    <div class="main-player__playbar--loading"></div>
                    <div class="main-player__playbar--progress"></div>
                </div>
                <span class="main-player__total-time small--hide"></span>
            </div>
            <div class="main-player__transport flex flex--align-center">
                <a href="#" class="play-pause-btn no-link">
                    <i class="fa fa-play"></i> 
                </a>
                <div class="main-player__volume-wrapper">
                    <i class="fa fa-volume-up"></i>

                    <div class="volume__sliderWrapper" role="slider" aria-valuemin="0" aria-valuemax="1" aria-label="Volume" aria-valuenow="0.73">
                        <div class="volume__sliderInner">
                          <div class="volume__sliderBackground"></div>
                          <div class="volume__sliderProgress" style="height: 67.16px;"></div>
                          <div class="volume__sliderHandle" style="top: 34.84px;">
                              <div class="volume__sliderHandleInner"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <a href="/post/like/" class="no-link main-player__like"><i class="fa fa-heart"></i></a>
          </div>
      </div>
  </div>
</div>
<!-- Scripts -->

<script type="text/javascript">
    var currentUser = {{ Auth::user() ? Auth::user()->id : 'false' }};
</script>
@yield('scripts')
<script type="text/javascript" src="{{ asset('js/jquery-3.4.1.min.js') }}" defer></script>
<script type="text/javascript" src="{{ asset('js/jquery.form.min.js') }}" defer></script>
<script type="text/javascript" src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
