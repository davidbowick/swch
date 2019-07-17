@extends('layouts.app',['body_class'=>'template--admin'])

@section('content')
<hr class="hr--invisible" >
<div class="grid grid--double-gutters grid--uniform flex small--flex-wrap">
	<div class="anim-in grid__item rte small--one-whole">
		<h4>Prompts</h4>
		@if ($prompts->count())
		<div class="current-prompts current-prompts__admin">
            <h2>Current Prompts</h2>
            @foreach ($prompts as $prompt)
            <div class="prompt">
                <h3 class="gm current-prompt"><a data-prompt-id="{{ $prompt->id }}" href="/prompts/{{ $prompt->slug }}">{{ $prompt->title }}</a>
                </h3>
            </div>
            @endforeach
        </div>
		@endif
		<p>
			<a class="btn" href="/admin/prompts/create">Add New</a>
		</p>
		<a class="link--small" href="/admin/prompts">All Prompts</a>
	</div>
	
	<div class="anim-in grid__item small--one-whole rte">
		<h4>Showcases</h4>
		@if ($showcase)
			<a class="no-underline" href="/admin/showcases/{{$showcase->id}}/edit">
			@include('snippets.next-showcase')
			</a>
		@endif 
		<p>
			<a class="btn" href="/admin/showcases/create">Add New</a>
		</p>
		<a class="link--small" href="/admin/showcases">All Showcases</a>
	</div>
	<div class="anim-in grid__item rte small--one-whole">
		<h4>Users</h4>
		@foreach ($users as $user)
			@include('snippets.user-card')
		@endforeach
	</div>
	<div class="anim-in grid__item rte small--one-whole">
		<h4>Submissions</h4>
		<ul class="admin-list admin-list__submissions">
			@foreach ($posts as $post)
			<li>
				<a href="/{{ $post->user->username }}/{{ $post->slug }}">{{ $post->title }}</a>
				<small class="grey">
					<i class="fa fa-heart"></i> <span class="like-count">{{ $post->likes->count() }}</span>
					<i class="fa fa-play"></i> <span class="play-count">{{$post->play_count}}</span>
				</small> 
			</li>
			@endforeach
		</ul>
	</div>
</div>
@endsection