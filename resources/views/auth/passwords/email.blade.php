@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
    <h1 class="title">{{ __('Reset Password') }}</h1>

    <div class="card-body">
        @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
        @endif

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <div class="field">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
                
            </div>

            <div class="field">
                <button type="submit" class="btn btn--primary">
                    {{ __('Send Password Reset Link') }}
                </button>
            </div>
        </form>
    </div>

</div>
@endsection
