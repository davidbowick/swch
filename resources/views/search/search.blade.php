@extends('layouts.app')
@section('content')
<hr class="hr--invisible" />
@if (!$query)
<h1>Search</h1>
<form method="GET" action="/search"> 
	<div class="field flex">
		<input type="text" placeholder="Search" name="q" value="" autocomplete="off"> 
		<button class="btn btn--dark" type="submit">Search</button> 
	</div>
</form> 
@else 
<h1>
	Search
	<span class="h2" style="float: right;"><span class="grey">{{ $total_results }} Result{{ $total_results > 1 ? 's' : '' }} for </span>"{{ $query }}"
	</span>
</h1>
<div class="even-columns">
	@if ($users->count())
	<div class="even-column">
		<h3>Users</h3>
		@foreach ($users as $user)
			@include('snippets.user-card')
		@endforeach
	</div>
	@endif
	@if ($posts->count())
	<div class="even-column">
		<h3>Posts</h3>
		@foreach ($posts as $post)
			@include('snippets.post')
		@endforeach
	</div>
	@endif
	@if ($prompts->count())
	<div class="even-column">
		<h3>Prompts</h3>
		@foreach ($prompts as $prompt)
			{{ $prompt->title }}
		@endforeach
	</div>
	@endif
</div>
@endif
@endsection