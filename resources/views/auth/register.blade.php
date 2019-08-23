@extends('layouts.app')
@section('title','Register')
@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
    <h1 class="title">{{ __('Register') }}</h1>

    <div class="card-body">
        <form id="registration-form" method="POST" action="{{ route('register') }}">
            @csrf
            <div class="special-field">
                <label for="birthday">Birthday</label>
                <input type="text" id="birthday" name="birthday" value="">
            </div>
            <div class="field row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>
                <div class="col-md-6">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="field row">
                <label for="username" class="col-md-4 col-form-label text-md-right">{{ __('Username') }}</label>

                <div class="col-md-6">
                    <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="" required autocomplete="username" >

                    @error('username')
                    <div class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </div>
                    @enderror
                </div>
            </div>

            <div class="field row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                <div class="col-md-6">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                    @error('email')
                    <div class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </div>
                    @enderror
                </div>
            </div>

            <div class="field row">
                <label for="password" class=" col-form-label text-md-right">{{ __('Password') }}</label>
                
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                @error('password')
                <div class="alert alert-danger" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
                
            </div>

            <div class="field row">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                
            </div>

            <div class="field">
                <button type="submit" class="btn btn--primary">
                    {{ __('Register') }}
                </button>
            </div>
        </form>
    </div>

</div>
@endsection
