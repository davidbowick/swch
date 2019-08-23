@extends('layouts.app')
@if ($user and $post)
@section('title',$user->name . ' - ' .$post->title )
@endif
@section('content')
<div id="page-content" class="flex small--flex-wrap">
	<div class="sidebar small--one-whole">
		<div class="sidebar__inner" data-sticky="true">
			@include('snippets.profile-sidebar')
		</div>
	</div>
	<div class="main small--one-whole">
		@include('snippets.post')
		@if (Auth::id() == $post->user_id) 
		<a class="btn" href="/posts/{{$post->id}}/edit"><i class="fa fa-cog"></i> Edit Song</a>
		@endif
	</div>
	@if (Auth::user())
	<div class="submit-song__wrapper">
		<a href="/posts/create" class="btn submit-song btn--primary">Submit a Song</a>
	</div>
	@endif
</div>
@if ($showComments) 
<style>.post__comments {display: block !important;}</style>
@endif
@endsection