@extends('layouts.app')
@section('title','FAQs - The Songwriting Challenge')
@section('content')
<hr class="hr--invisible">
@if ($faqs)
<div class="faqs container--thin">
<h1 class="title">
	FAQs 
	@if(Auth::user())
	@if(Auth::user()->type == 'admin')
	<a href="/admin/faqs/create" class="btn" style="float: right;">Add New</a>
	@endif 
	@endif
</h1>
@foreach ($faqs as $faq)
<div class="faq__item anim-in">
	<h3 class="faq__question">
		{{ $faq->question }}
		@if(Auth::user())
			@if(Auth::user()->type == 'admin')
			<a href="/admin/faqs/{{$faq->id}}/edit" style="float: right;"><small><i class="fa fa-cog"></i></small></a>
			@endif 
		@endif
	</h3>
	<div class="faq__answer rte"><p>{!! nl2br(e($faq->answer)) !!}</p></div>
	
</div>
@endforeach
</div>
@endif
@endsection