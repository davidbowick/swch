@extends('layouts.app')
@section('content')
<div id="page-content" class="flex small--flex-wrap">
    <div class="sidebar small--one-whole">
        <div class="sidebar__inner" data-sticky="true">
            @if ($prompts->count())
            <div class="current-prompts">
                <h2>Current Prompts</h2>
                @foreach ($prompts as $prompt)
                <div class="prompt">
                    <h3 class="gm current-prompt"><a data-prompt-id="{{ $prompt->id }}" href="/prompts/{{ $prompt->slug }}">{{ $prompt->title }}</a></h3>
                </div>
                @endforeach
            </div>
            @endif
            @if ($showcase)
            @include('snippets.next-showcase')
            @endif
        </div>
    </div>
    <div class="main small--one-whole">
        @if ($posts->count())
        <h2 class="flex flex--align-center">Current Submissions <small class="float-right"><a href="#" class="play-all"><i class="fa fa-play"></i> Play All</a></small></h2>
        @foreach ($posts as $post)
            @include('snippets.post')
        @endforeach
        @endif 
        <hr class="hr--invisible hr--double-margin">
        @if ($top_posts->count())
        <h4>Top Past Submissions</h4>
        @foreach ($top_posts as $post)
            @include('snippets.post')
        @endforeach
        @endif
    </div>
    @if (Auth::user())
    <div class="submit-song__wrapper">
        <a href="/posts/create" class="btn submit-song btn--primary">Submit a Song</a>
    </div>
    @endif
    @include('snippets.playlist-script')
</div>
@endsection

