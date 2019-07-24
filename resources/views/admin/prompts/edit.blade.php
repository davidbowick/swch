@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<a href="/admin">&lt; Back</a>
<div class="container--tiny">

<h1 class="title">Edit Prompt</h1>
<form method="POST" action="/admin/prompts/{{ $prompt->id }}">
	@csrf
	@method('PATCH')
	<div class="field">
		<label for="title">Title</label>
		<div class="control">
			<input id="title" type="text" name="title" placeholder="Title" value="{{ $prompt->title}}">
		</div>
	</div>
	@if ($showcases)
	<div class="field">
		<label for="showcase">Showcase</label>
		<div class="control">
			<select name="showcase_id">
				<option name="showcase_id" value="">Please Select a Showcase</option>
			@foreach($showcases as $showcase) 
			<option value="{{$showcase->id}}" {{ ($prompt->showcase_id  == $showcase->id) ? 'selected' : '' }}>{{ $showcase->venue }} | {{ $showcase->date_time->format('M j, Y - ga') }}</option>
			@endforeach
			</select>
			{{-- <input id="showcase" type="text" name="title" placeholder="Title" value="{{ $prompt->title}}"> --}}
		</div>
	</div>
	@endif 
	<div class="field">
		<input id="is-active" type="checkbox" name="active[]" value="{{ $prompt->active }}" {{ $prompt->active ? 'checked' : '' }}>
		<label for="is-active">
			<span>
			Active?
		</span>
		</label>
	</div>
	<button type="submit" class="btn btn--primary">Update</button>
</form>
<br/>
<form method="POST" action="/admin/prompts/{{ $prompt->id }}">
	@csrf
	@method('DELETE')
	<button class="btn btn--secondary" type="submit">Delete Prompt</button>
</form>
</div>
@endsection