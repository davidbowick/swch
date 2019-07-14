@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	<h1 class="title">Add New Prompt</h1>
	<form method="POST" action="/admin/prompts/">
		@csrf
		<div class="field">
			<label for="title">Title</label>
			<div class="control">
				<input id="title" type="text" name="title" placeholder="Title">
			</div>
			<input type="hidden" name="active" value="0" />
		</div>
		<div class="field">
			<button type="submit" class="btn btn--primary">Add Prompt</button>
		</div>
	</form>
</div>
@include('errors')
@endsection