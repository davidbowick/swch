@extends('layouts.app',['body_class'=>'template--welcome'])
@section('content')
<div class="welcome">
	<div class="container flex flex--justify-space-between small--flex-wrap">
		<div class="two-thirds small--one-whole welcome-note">
			<h1 class="flex flex--align-center">
				<span>Welcome to</span> &nbsp;&nbsp;<svg id="Layer_1" width="74" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.1 40"><path d="M31.7 34.1l1.5-11.4L30.5 5h-4.6l-2.3 14.6L21.5 5h-4.6l4.8 29.1h4.2l2.4-15.9 2.5 15.9zM38 0l-5.4 40h3.9l5.9-40zM14.5 26.9c0 2-.5 3.8-1.6 5.2-.7 1-1.8 1.7-3 2.1-.8.2-1.6.3-2.4.3-1.7 0-3.2-.4-4.3-1.3-1-.7-1.7-1.7-2.2-2.8-.6-1.3-.9-2.7-1-4.1l4.2-.3c.2 1.7.6 2.9 1.4 3.7.4.5 1.1.8 1.8.8 1 0 1.7-.5 2.3-1.4.3-.5.4-1.1.4-1.9 0-1.2-.5-2.4-1.6-3.6-.9-.8-2.2-2-3.9-3.7C3.1 18.4 2 17.1 1.4 16c-.7-1.3-1-2.7-1-4.1 0-2.6.9-4.7 2.7-6 1.1-.8 2.5-1.2 4.1-1.2 1.6 0 2.9.4 4 1.1.9.6 1.6 1.4 2.1 2.3.6 1 .9 2.2 1 3.4l-4.2.8c-.1-1.2-.5-2.1-1-2.8-.4-.5-1-.7-1.7-.7-.8-.2-1.5.2-1.9.9-.4.6-.5 1.4-.5 2.1 0 1.3.6 2.7 1.7 4.1.6.7 1.2 1.3 1.9 1.9 1 .9 1.7 1.4 2 1.8 1 1 1.8 2 2.5 3.2.3.4.5.9.7 1.4.4.8.7 1.7.7 2.7zM49.5 34.5c-3.8 0-6.9-3.1-7-6.9v-16c0-1.9.7-3.6 2-4.9 2.7-2.7 7.1-2.7 9.8 0 1.3 1.3 2 3.1 2 4.9v3.3h-4.5v-3.4c0-1.4-1.1-2.5-2.5-2.5-.7 0-1.3.3-1.8.7-.5.5-.7 1.1-.7 1.8v16c0 1.4 1.1 2.5 2.5 2.5.7 0 1.3-.3 1.8-.7.5-.5.8-1.1.7-1.8v-4h4.5v4.1c.2 3.8-2.9 6.9-6.8 6.9zM64.4 21.8v12.3H60V5h4.4v12.4h5.3V5h4.4v29.1h-4.4V21.8h-5.3z"/></svg>
			</h1>
			<h2 class="pronunciation">[switch]: The Songwriting Challenge</h2>
			<p class="large-text">
				<ol>
					<li>
						A songwriting community to encourage regular writing by using community-generated prompts
					</li>
					<li>
						Once a month local users can gather to play and share their songs
					</li>
				</ol>
				The Songwriting Challenge is a fun way to keep yourself writing<br/>...even if you're not feeling inspired.
			</p>
			<p>Each month we'll get 2 new prompts, pulled randomly from users. Then you are encouraged to write 2 new songs using those 2 prompts verbatim somewhere in your lyrics.</p>
		</div>
		<div class="one-third small--one-whole">
			<h2>Log In</h2>
			<form method="POST" action="{{ route('login') }}">
				@csrf
				<div class="field row">
					<label for="email" class="visually-hidden col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
					<div class="col-md-6">
						<input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
						@error('email')
						<span class="invalid-feedback" role="alert">
							<strong>{{ $message }}</strong>
						</span>
						@enderror
					</div>
				</div>
				<div class="field row">
					<label for="password" class="visually-hidden col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

					<input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

					@error('password')
					<span class="invalid-feedback" role="alert">
						<strong>{{ $message }}</strong>
					</span>
					@enderror
				</div>

				<div class="field">
					<button type="submit" class="btn btn--primary btn--full">
						{{ __('Login') }}
					</button>
				</div>
				<hr class="hr--double-margin">
				<div class="field">
					<h4>Not registered yet?</h4>
					<a href="/register" class="btn btn--secondary">Register now</a>
				</div>
			</div>
		</form>
	</div>
</div>
</div>
@endsection