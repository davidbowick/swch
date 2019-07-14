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
	<div class="field">
		<label for="is-active">
			<input id="is-active" type="checkbox" name="active[]" value="{{ $prompt->active }}" {{ $prompt->active ? 'checked' : '' }}>
			Active?
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