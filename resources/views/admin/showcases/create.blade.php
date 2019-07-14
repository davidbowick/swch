@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	<h1 class="title">Add New Showcase</h1>
	<form method="POST" action="/admin/showcases/">
		@csrf
		<div class="field">
			<label for="venue">Venue</label>
			<input id="venue" type="text" name="venue" placeholder="Venue">
		</div>
		<div class="field">
			<label for="date_time">Date / Time</label>
			<input id="date_time" type="text" name="date_time" placeholder="Date / Time">
		</div>
		<div class="field">
			<label for="address">Address</label>
			<input id="address" type="text" name="address" placeholder="Address">
		</div>
		<br/>
		<button type="submit" class="btn btn--primary">Add Showcase</button>
		@include('errors')
	</form>
</div>
@endsection