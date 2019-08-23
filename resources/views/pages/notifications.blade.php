@extends('layouts.app')
@section('title','Notifications - The Songwriting Challenge')
@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	@if($unreadNotifications->count() > 0)
	<h1 class="title flex flex--align-center flex--justify-space-between">
		<span>New Notifications</span>
		<a href="/notifications" class="grey mark-as-read no-link"><small>Mark all as read</small></a></h1>
	<div class="rte new-notifications">
		<ul>
			@foreach ($unreadNotifications as $notification) 
			@php
				$n = $notification['data'];

				$post = $n['post'];
				$post_user = $n['post_user'];
				$notified_by = $n['notified_by'];
			@endphp
			
			@if ($notification['type'] == 'App\Notifications\LikeNotification')
			<li class="notification--like">
				<a class="no-link mark-single--as-read" href="/notification/{{ $notification['id'] }}/mark-as-read"><i class="fa fa-times"></i></a>
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> liked <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
			</li>
			@else
			<li class="notification--comment "> 
				<a class="no-link mark-single--as-read" href="/notification/{{ $notification['id'] }}/mark-as-read"><i class="fa fa-times"></i></a>
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> commented on <a href="/{{ $post_user['username'] }}/{{$post['slug']}}/comments">{{$post['title']}}</a>
				<div class="comment-notification-quote">{{$n['comment']}}</div>

			</li>
			@endif
			@endforeach
		</ul>
	</div>
	@if($readNotifications->count() > 0)
	<hr class="hr--invisible">
	@endif
	@else 
	<h3>No New Notifications</h3>
	@endif

	@if($readNotifications->count() > 0)
	<hr>
	<h3 class="grey">Old Notifications</h3>
	<div class="rte old-notifications">
		<ul>
			@foreach ($readNotifications as $notification) 
			@php
				$n = $notification['data'];
				$post = $n['post'];
				$post_user = $n['post_user'];
				$notified_by = $n['notified_by'];
			@endphp
			
			@if ($notification['type'] == 'App\Notifications\LikeNotification')
			<li class="notification--like">
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> liked <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
			</li>
			@else
			<li class="notification--comment"> 
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> commented on <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
				<div class="comment-notification-quote">{{$n['comment']}}</div>
			</li>
			@endif
			
			
			@endforeach
		</ul>
	</div>
	@endif
</div>
@endsection