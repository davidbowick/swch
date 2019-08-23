@extends('layouts.app')
@section('title','Login')
@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
    <h1 class="title">{{ __('Login') }}</h1>
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="field row">
            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
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
            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
            
            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

            @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>

        <div class="field row">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                <label class="form-check-label" for="remember">
                    {{ __('Remember Me') }}
                </label>

            </div>
        </div>

        <div class="field">
            <button type="submit" class="btn btn--primary">
                {{ __('Login') }}
            </button>
            @if (Route::has('password.request'))
            <a class="forgot-password__link" href="{{ route('password.request') }}">
                {{ __('Forgot Your Password?') }}
            </a>
            @endif
        </div>
        <hr class="hr--double-margin">
        <div class="field">
            <h4>Not registered yet?</h4>
            <a href="/register" class="btn btn--secondary">Register now</a>
        </div>
    </div>
</form>

</div>
@endsection
