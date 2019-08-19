@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	<h1 class="title flex flex--align-center flex--justify-space-between"><span>New Prompt Ideas</span> <small>Everyone gets two per showcase</small></h1>
	@for ( $i=1; $i<3; $i++) 
	@php 
		$io = $i - 1;
	@endphp
	<form class="suggestion-form" id="suggestion-{{$i}}" method="POST" action="/suggestions">
		@csrf
		<div class="field">
			<label for="title">Suggestion #{{$i}}</label>
			<div class="flex small--flex-wrap flex--align-center">
				<input id="title" type="text" name="title" placeholder="Title"
					@if (isset($userSubmissions[$io])) 
					value="{{$userSubmissions[$io]->title}}"
					disabled="true"
					@endif
				>
			@if (!isset($userSubmissions[$io]))
				<button type="submit" class="btn btn--dark small--one-whole">Submit</button>
			@else 
				<a href="/delete-suggestion/{{ $userSubmissions[$io]->id }}" data-form="delete-suggestion-{{ $userSubmissions[$io]->id }}" class="delete-suggestion no-link">&times;</a>
			@endif
			</div>
		</div>
		@if (Auth::user())
		<input type="hidden" name="user_id" value="{{ Auth::user()->id }}" >
		@endif 
		@if ($showcase)
		<input type="hidden" name="showcase_id" value="{{ $showcase->id }}" >
		@endif
		<hr class="hr--invisible">
		<hr class="hr--invisible">
	</form>
	@endfor
	<hr class="hr--invisible">
	<hr class="hr--invisible">
	@if ($userSubmissions->count() >= 2) 
	<h2>Thanks for your submissions,<br>we'll draw from the "hat" soon</h2>
	@endif
	@if(Auth::user()->type == 'admin')
	<hr>
	<h1>Pick out of the hat</h1>
	<a data-pick-number="1" class="hat-draw btn btn--primary no-link">Pick!</a>
	<hr class="hr--invisible">
	<h2 class="results-1"></h2>
	<h2 class="results-2"></h2>
	@endif
</div>
@include('errors')
@endsection