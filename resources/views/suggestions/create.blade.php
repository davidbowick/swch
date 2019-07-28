@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	<h1 class="title flex flex--align-center flex--justify-space-between"><span>New Prompt Ideas</span> <small>Everyone gets Two</small></h1>
	@for ( $i=1; $i<3; $i++) 
	@php 
		$io = $i - 1;
	@endphp
	<form class="suggestion-form" id="suggestion-{{$i}}" method="POST" action="/suggestion">
		@csrf
		<div class="field">
			<label for="title">Suggestion #{{$i}}</label>
			<input id="title" type="text" name="title" placeholder="Title"
				@if (isset($userSubmissions[$io])) 
				value="{{$userSubmissions[$io]->title}}"
				disabled="true"
				@endif
			>
		</div>
		@if (Auth::user())
		<input type="hidden" name="user_id" value="{{ Auth::user()->id }}" >
		@endif 
		@if ($showcase)
		<input type="hidden" name="showcase_id" value="{{ $showcase->id }}" >
		@endif
		@if (!isset($userSubmissions[$io]))
		<div class="field">
			<button type="submit" class="btn btn--primary">Suggest Prompt</button>
		</div>
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
	<a class="hat-draw btn btn--primary no-link">Pick!</a>
	<hr class="hr--invisible">
	<h2 class="results-1"></h2>
	<h2 class="results-2"></h2>
	@endif

{{-- 
	<form class="suggestion-form" id="suggestion-2" method="POST" action="/suggestion">
		@csrf
		<div class="field">
			<label for="title">Title</label>
			<input id="title" type="text" name="title" placeholder="Title">
		</div>
		<input type="hidden" name="user_id" value="{{ Auth::user()->id }}" >
		@if ($showcase)
		<input type="hidden" name="showcase_id" value="{{ $showcase->id }}" />
		@endif
		<div class="field">
			<button type="submit" class="btn btn--primary">Suggest Prompt</button>
		</div>
	</form> --}}
</div>
@include('errors')
@endsection