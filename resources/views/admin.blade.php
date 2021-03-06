@extends('layouts.app',['body_class'=>'template--admin'])
@section('title','Admin')
@section('content')
<hr class="hr--invisible" >
<div class="grid grid--double-gutters grid--uniform flex small--flex-wrap">
	@if ($prompts)
	<div class="anim-in grid__item small--one-half">
		<h4>Current Prompts</h4>
		@if ($prompts->count())
		<div class="current-prompts__admin">
			<ol>
				@foreach ($prompts as $prompt)
				<li>
					<b class="gm current-prompt"><a data-prompt-id="{{ $prompt->id }}" href="/admin/prompts/{{ $prompt->id }}/edit">{{ $prompt->title }}</a>
					</b>
				</li>
				@endforeach
			</ol>
        </div>
		@endif
		<hr>
		<p>
			<a class="btn btn--dark" href="/admin/prompts/create">Add New</a>
		</p>
		<hr>
		<a class="link--small" href="/admin/prompts">All Prompts</a>

		<hr class="hr--invisible">
	</div>
	@endif
	
	@if ($showcase)
	<div class="anim-in grid__item small--one-half">
		<h4>Showcases</h4>
		@if ($showcase)
			<a class="no-underline" href="/admin/showcases/{{$showcase->id}}/edit">
			@include('snippets.next-showcase')
			</a>
		@endif 
		<hr>
		<p>
			<a class="btn btn--dark" href="/admin/showcases/create">Add New</a>
		</p>
		<hr>
		<a class="link--small" href="/admin/showcases">All Showcases</a>
		<hr class="hr--invisible">
	</div>
	@endif 

	@if ($users)
	<div class="anim-in grid__item small--one-whole">
		<h4>Users <small class="float-right">({{$total_users}})</small></h4>
		@foreach ($users as $user)
			@include('snippets.user-card')
		@endforeach
		<hr >
		<a href="/admin/users" class="link--small">All Users</a>
	</div>
	@endif 

	@if ($posts)
	<div class="anim-in grid__item rte small--one-whole">
		<h4>Submissions <small> ({{$total_posts}})</small></h4>
		<ul class="admin-list__submissions">
			@foreach ($posts as $post)
			<li>
				<a href="/{{ $post->user->username }}/{{ $post->slug }}">{{ $post->title }}</a>
				<small class="grey">
					<i class="fa fa-heart"></i> <span class="like-count">{{ $post->likes->count() }}</span>
					<i class="fa fa-play"></i> <span class="play-count">{{$post->play_count}}</span>
					<i class="fa fa-comment"></i> <span class="comment-count">{{ $post->comments->count() }}</span>
				</small> 
			</li>
			@endforeach
		</ul>
		<hr class="hr--invisible">
	</div>
	@endif
</div>
@endsection