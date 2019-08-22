@extends('layouts.app')
@section('content')
<hr class="hr--invisible">
<a class="back-btn" href="/admin"><i class="fa fa-chevron-left"></i> Back</a>
<div class="container--thin">
<h1 class="title flex flex--align-center">Prompts &nbsp;&nbsp;<small class="grey">({{$prompts->count()}})</small></h1>
@if ($prompts->count())
<ul class="admin-list">
	@foreach ($prompts as $prompt)
	<li class="flex flex--align-center flex--justify-space-between prompt {{ $prompt->active ? 'active' : '' }}">
		<form class="inline-form ajax-active" method="POST" action="/admin/prompts/{{ $prompt->id }}">
			@csrf
			@method('PATCH')
			<input id="active-{{$loop->iteration}}" type="checkbox" name="active[]" value="{{ $prompt->active }}" {{ $prompt->active ? 'checked' : '' }} >
			<label for="active-{{$loop->iteration}}">
				<span>
					{{ $prompt->title }}
				</span>
			</label>
		</form>
		<a href="/admin/prompts/{{$prompt->id}}/edit"><i class="fa fa-cog"></i></a>
	</li>
	@endforeach
</ul>
@endif 
<a class="btn" href="/admin/prompts/create">Add New</a>
</div>
@endsection