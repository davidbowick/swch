@extends('layouts.app')
@section('content')
@if ($user)
<div id="page-content" class="flex">
	<div class="sidebar">
		<div class="sidebar__inner" data-sticky="true">
			@include('snippets.profile-sidebar')
		</div>
	</div>
	<div class="main">
		@if ($user->posts->count())
			@foreach ($user->posts as $post)
				@include('snippets.post')
			@endforeach
		@else 
			<h2>{{ $user->name }} has no posts yet</h2>
		@endif
		@include('snippets.please-login')
	</div>
	@if (Auth::id() == $user->id)
	<div class="submit-song__wrapper">
		<a href="/posts/create" class="btn submit-song btn--primary">Submit a Song</a>
	</div>
	@endif
</div>
@else
  <script>window.location = "/";</script>
@endif
@endsection