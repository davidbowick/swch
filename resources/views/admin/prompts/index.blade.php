@extends('layouts.app')
@section('content')
<hr class="hr--invisible">
<a href="/admin">&lt; Back</a>
<div class="container--tiny">
<h1 class="title">Prompts</h1>
@if ($prompts->count())
<ul class="admin-list">
	@foreach ($prompts as $prompt)
	<li class="flex flex--align-center prompt {{ $prompt->active ? 'active' : '' }}">
		@if ($prompt->active)
		<i class="fa fa-certificate"></i>
		@endif
		<a href="/admin/prompts/{{$prompt->id}}/edit">{{ $prompt->title }}</a>
		{{-- <form action="/admin/prompts/{{ $prompt->id }}" method="POST">
			@csrf
			@method('PATCH')
			<input id="is-active" type="checkbox" name="active[]" value="{{ $prompt->active }}" {{ $prompt->active ? 'checked' : '' }}>
		</form> --}}
	</li>
	@endforeach
</ul>
@endif 
<a class="btn" href="/admin/prompts/create">Add New</a>
</div>
@endsection