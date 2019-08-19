@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<a href="/faq" class=""><i class="fa fa-chevron-left"></i> Back</a>
<div class="container--tiny">
<h1 class="title">Edit FAQ</h1>
<form action="/admin/faqs/{{ $faq->id }}" method="POST">
	@csrf
	@method('PATCH')
	<div class="field">
		<label for="question">Question</label>
		<input type="text" id="question" name="question" placeholder="Question" value="{{ $faq->question }}">
	</div>
	<div class="field">
		<label for="answer">Answer</label>
		<textarea id="answer" name="answer" placeholder="Answer">{{ $faq->answer }}</textarea>
	</div>
	<div class="field">
		<button type="submit" class="btn btn--primary">Update FAQ</button>
	</div>
</form>
<br/>
<form method="POST" action="/admin/faqs/{{ $faq->id }}">
	@csrf
	@method('DELETE')
	<button class="btn btn--secondary" type="submit">Delete FAQ</button>
</form>
</div>
@endsection