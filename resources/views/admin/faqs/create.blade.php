@extends('layouts.app')
@section('content')
<hr class="hr--invisible">
<div class="container--thin">
<h1 class="title">Add FAQ</h1>

<form action="/admin/faqs" method="POST">
	@csrf
	<div class="field">
		<label for="question">Question</label>
		<input type="text" id="question" name="question" placeholder="Question">
	</div>
	<div class="field">
		<label for="answer">Answer</label>
		<textarea id="answer" name="answer" placeholder="Answer"></textarea>
	</div>
	<div class="field">
		<button type="submit" class="btn btn--primary">Add</button>
	</div>
</form>
</div>
@endsection