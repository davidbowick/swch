@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
    <h1 class="title">{{ __('Verify Your Email Address') }}</h1>

    @if (session('resent'))
    <div class="alert alert-success" role="alert">
        {{ __('A fresh verification link has been sent to your email address.') }}
    </div>
    @endif
    <div class="rte">
    {{ __('Before proceeding, please check your email for a verification link.') }}
    {{ __('If you did not receive the email') }}, <a href="{{ route('verification.resend') }}">{{ __('click here to request another') }}</a>.
    </div>

</div>
@endsection
