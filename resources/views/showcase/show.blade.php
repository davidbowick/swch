@extends('layouts.app')
@section('content')
<div id="page-content" class="flex">
	<div class="sidebar">
		<div class="sidebar__inner" data-sticky="true">
			<h3>{{$showcase->venue}}</h3>
			<h4 class="h4">{{ $showcase->date_time->format('M j, Y | ga') }}
				<br/>
				{{ $showcase->address}}
			</h4>
		</div>
	</div>
	<div class="main rte">
		<h3>Prompts</h3>
		<ul>
		@foreach($showcase->prompts as $prompt)
			<li><a class="no-underline" href="/prompts/{{$prompt->slug}}"><b>{{ $prompt->title }}</b></a></li>
		@endforeach
		</ul>
		<hr class="hr--invisible">
		<h3>{{ $users_attending->count() }} Users {{ $showcase->isUpcoming() ? 'Attending' : 'Attended' }}</h3>
		@foreach($showcase->users as $user)
			@include('snippets.user-card')
		@endforeach
	</div>
</div>
@endsection