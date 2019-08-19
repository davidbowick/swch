@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<a href="/admin"><i class="fa fa-chevron-left"></i> Back</a>
<div class="container--thin">
<h1 class="title">All Showcases</h1>
@if ($showcases->count())
<ul class="admin-list">
@foreach ($showcases as $showcase)
<li class="flex flex--align-center flex--justify-space-between showcase {{ $showcase->active ? 'active' : '' }}">
	<form class="inline-form ajax-active" method="POST" action="/admin/showcases/{{ $showcase->id }}">
		@csrf
		@method('PATCH')
		<input id="active-{{$loop->iteration}}" type="checkbox" name="active[]" value="{{ $showcase->active }}" {{ $showcase->active ? 'checked' : '' }} >
		<label for="active-{{$loop->iteration}}" class="checkbox-label">
			<span>{{ $showcase->venue }} | {{ $showcase->date_time->format('M j, Y - ga') }}</span>
		</label>
	</form>
	<a href="/admin/showcases/{{$showcase->id}}/edit"><i class="fa fa-cog"></i></a>
</li>
@endforeach
</ul>
@endif
<a class="btn btn--primary" href="/admin/showcases/create">Add New Showcase</a>
</div>
@endsection