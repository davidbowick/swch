@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<a class="back-btn" href="/admin"><i class="fa fa-chevron-left"></i> Back</a>
<hr class="hr--invisible">
<h1 class="title">All Users</h1>
<div class="flex flex--wrap grid">
	@if($users)
	@foreach($users as $user)
	<div class="grid__item one-quarter small--one-half">
		@include('snippets.user-card')
	</div>
	@endforeach
	@endif 
</div>
@endsection