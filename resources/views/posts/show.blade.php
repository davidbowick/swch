@extends('layouts.app')
@section('content')
<div id="page-content" class="flex">
	<div class="sidebar">
		<div class="sidebar__inner">
			@include('snippets.profile-sidebar')
		</div>
	</div>
	<div class="main">
		@include('snippets.post')
	</div>
	@if (Auth::user())
	<div class="submit-song__wrapper">
		<a href="/posts/create" class="btn submit-song btn--primary">Submit a Song</a>
	</div>
	@endif
</div>
@endsection