@extends('layouts.app')
@section('content')
<hr class="hr--invisible">

<div class="container--tiny">
	<h1>Change Password</h1>
	<form method="POST" action="/change-password">
		@csrf
		<div class="field">
			<label for="old_password">Current Password</label>
			<input id="old_password" name="old_password" type="password" required autofocus>
			@error('old_password')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<label for="new_password">New Password</label>
			<input id="new_password" name="new_password" type="password" required autofocus>
			@error('new_password')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<label for="password_confirm">Confirm New Password</label>
			<input id="password_confirm" name="password_confirm" type="password" required autofocus>
			@error('password_confirm')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<button type="submit" class="btn btn--primary">Submit</button>
		</div>
	</form>
</div>
@endsection