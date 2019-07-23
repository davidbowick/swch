@extends('layouts.app')
@section('content')
<div id="page-content" class="flex small--flex-wrap">
	<div class="sidebar small--one-whole">
		<div class="sidebar__inner" data-sticky="true">
			@include('snippets.profile-sidebar')
		</div>
	</div>
	<div class="main small--one-whole">
		@include('snippets.post')
	</div>
	@if (Auth::user())
	<div class="submit-song__wrapper">
		<a href="/posts/create" class="btn submit-song btn--primary">Submit a Song</a>
	</div>
	@endif
</div>
@endsection