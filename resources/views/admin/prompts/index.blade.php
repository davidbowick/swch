@extends('layouts.app')
@section('content')
<hr class="hr--invisible">
<a href="/admin">&lt; Back</a>
<div class="container--thin">
<h1 class="title">Prompts</h1>
@if ($prompts->count())
<ul class="admin-list">
	@foreach ($prompts as $prompt)
	<li class="flex flex--align-center flex--justify-space-between prompt {{ $prompt->active ? 'active' : '' }}">
		<form class="inline-form ajax-active" method="POST" action="/admin/prompts/{{ $prompt->id }}">
			@csrf
			@method('PATCH')
			<label for="active-{{$loop->iteration}}">
				<input id="active-{{$loop->iteration}}" type="checkbox" name="active[]" value="{{ $prompt->active }}" {{ $prompt->active ? 'checked' : '' }} >
			{{ $prompt->title }}
		</label>
		</form>
		{{-- @if ($prompt->active)
		<i class="fa fa-certificate"></i>
		@endif --}}
		<a href="/admin/prompts/{{$prompt->id}}/edit" class="btn btn--small">Edit</a>
		
	</li>
	@endforeach
</ul>
@endif 
<a class="btn" href="/admin/prompts/create">Add New</a>
</div>
@endsection