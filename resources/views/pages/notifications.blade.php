@extends('layouts.app')
@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	<h1 class="title">Notifications</h1>
	@if ($user->unreadNotifications->count() > 0)
	{{$user->unreadNotifications->count()}} new notifications!
	@endif
</div>
@endsection