@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<a href="/admin">&lt; Back</a>
<div class="container--tiny">
<h1 class="title">All Showcases</h1>
@if ($showcases->count())
<ul class="admin-list">
@foreach ($showcases as $showcase)
<li class="showcase {{ $showcase->active ? 'active' : '' }}">
	@if ($showcase->active) 
	<i class="fa fa-certificate"></i>
    @endif
	<a href="/admin/showcases/{{ $showcase->id}}/edit">{{ $showcase->venue }}</a>
</li>
@endforeach
</ul>
@endif
<a class="btn btn--primary" href="/admin/showcases/create">Add New Showcase</a>
</div>
@endsection