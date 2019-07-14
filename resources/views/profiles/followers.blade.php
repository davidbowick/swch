@extends('layouts.app')
@section('content')
@if ($user)
<div id="page-content" class="flex">
	<div class="sidebar">
		<div class="sidebar__inner" data-sticky="true">
			@include('snippets.profile-sidebar')
		</div>
	</div>
	<div class="main no-right-padding">
		<h1>{{ $user->getFirstName() }}'s Followers</h1>
		<div class="flex flex--wrap grid">
			@foreach($user->likes as $user)
			<div class="one-third grid__item">
				@include('snippets.user-card')
			</div>
			@endforeach
		</div>

	</div>
	
</div>
@else
  <script>window.location = "/";</script>
@endif
@endsection