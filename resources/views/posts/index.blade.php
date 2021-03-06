@extends('layouts.app')
@section('content')
<div id="page-content" class="flex">
	<div class="sidebar small--hide">
		<div class="sidebar__inner" data-sticky="true">
			<h4>Stats</h4>
			<table class="prompt-stats">
				<tr>
					<td><b>Submissions:</b></td>
					<td>{{ $posts->count() }}</td>
				</tr>
				<tr>
					<td><b>Plays:</b></td>
					<td>{{ $total_plays }}</td>
				</tr>
				<tr>
					<td><b>Likes:</b></td>
					<td>{{ $total_likes }}</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="main small--one-whole">
		<hr class="hr--invisible desktop-up--hide">
		<h1 class="h2"><span class="h3 grey">Submissions for:</span> "{{ $prompt->title }}"</h1>
		@foreach ($posts as $post)
			@include('snippets.post')
		@endforeach
	</div>
	@if (Auth::user())
	<div class="submit-song__wrapper small--hide">
		<a href="/posts/create" class="btn submit-song btn--primary">Submit a Song</a>
	</div>
	@endif
</div>
@endsection
@section('scripts')
@include('snippets.playlist-script');
@endsection