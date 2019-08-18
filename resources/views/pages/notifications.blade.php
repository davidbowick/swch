@extends('layouts.app')
@section('content')
<hr class="hr--invisible">
<div class="container--tiny">
	@if($unreadNotifications->count() > 0)
	<h1 class="title flex flex--align-center flex--justify-space-between">
		<span>New Notifications</span>
		<a href="/notifications/all-read" class="grey mark-as-read no-link"><small>Mark all as read</small></a></h1>
	<div class="rte new-notifications">
		<ul>
			@foreach ($unreadNotifications as $notification) 
			@php
				$n = $notification['data'];
				$post = $n['post'];
				$post_user = $n['post_user'];
				$notified_by = $n['notified_by'];
			@endphp
			<li>
			@if ($notification['type'] == 'App\Notifications\LikeNotification')
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> liked <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
			@else 
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> commented on <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
				<div class="comment-notification-quote">{{$n['comment']}}</div>
			@endif
			
			</li>
			@endforeach
		</ul>
	</div>
	@if($readNotifications->count() > 0)
	<hr class="hr--invisible">
	@endif
	@endif

	@if($readNotifications->count() > 0)
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
			<li>
			@if ($notification['type'] == 'App\Notifications\LikeNotification')
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> liked <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
			@else 
				<a href="/{{ $notified_by['username'] }}">{{ $notified_by['name'] }}</a> commented on <a href="/{{ $post_user['username'] }}/{{$post['slug']}}">{{$post['title']}}</a>
				<div class="comment-notification-quote">{{$n['comment']}}</div>
			@endif
			
			</li>
			@endforeach
		</ul>
	</div>
	@endif
</div>
@endsection