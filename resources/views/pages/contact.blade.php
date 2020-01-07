@extends('layouts.app')
@section('title','Contact - The Songwriting Challenge')
@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	<h1 class="title">Contact</h1>
	@if(session()->has('message'))
	<div class="alert alert-success">
		{{ session()->get('message') }}
	</div>
	@endif
	<form id="contact-form" action="/contact" method="POST" honey-form>
		@csrf
		<div class="field ohnohoney">
			<label class="visually-hidden" for="birthday">Birthday</label>
			<input autocomplete="off" honey-input id="birthday" type="text" name="birthday" value="">
		</div>
		<div class="field ohnohoney">
			<label for="faxonly">Fax Only
				<input autocomplete="off" type="checkbox" name="faxonly" id="faxonly" />
			</label>
		</div>
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