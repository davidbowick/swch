@extends('layouts.app')
@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	<h1 class="title">Contact</h1>
	<form action="/contact" method="POST">
		@csrf
		<div class="field">
			<label for="name">Name</label>
			<input id="name" type="text" name="name" value="{{ Auth::user() ? Auth::user()->name : '' }}">
		</div>
		<div class="field">
			<label for="email">Email</label>
			<input id="email" type="email" name="email" value="{{ Auth::user() ? Auth::user()->email : ''}}">
		</div>
		<div class="field">
			<label for="message">Message</label>
			<textarea id="message" name="message"></textarea>
		</div>
		<div class="field">
			<button class="btn btn--primary" type="submit">Submit</button>
		</div>
	</form>
</div>
@endsection