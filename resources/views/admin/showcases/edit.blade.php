@extends('layouts.app')

@section('content')
<hr class="hr--invisible">
<a class="back-btn" href="/admin"><i class="fa fa-chevron-left"></i> Back</a>
<div class="container--tiny">
<h1 class="title flex flex--align-center flex--justify-space-between">
	<span>Edit Showcase</span>
	<small>
		<time datetime="{{ $showcase->date_time->format('Y-m-d') }}" class="icon">
			<em class='time-day'>{{ $showcase->date_time->format('D') }}</em>
			<strong class="time-month">{{ $showcase->date_time->format('M') }}</strong>
			<span class="time-date">{{ $showcase->date_time->format('j') }}</span>
		</time>
	</small>
</h1>
<form method="POST" action="/admin/showcases/{{ $showcase->id }}">
	@csrf
	@method('PATCH')
	<div class="field">
		<label for="venue">Venue</label>
		<input id="venue" type="text" name="venue" placeholder="Venue" value="{{ $showcase->venue }}">
	</div>
	<div class="field">
		<label for="date_time">Date / Time</label>
		<input id="date_time" {{-- class="datepicker-here" data-timepicker="true" data-time-format='hh:ii' data-language="en" --}} type="text" name="date_time" placeholder="Date / Time" value="{{ $showcase->date_time }}">
	</div>
	<div class="field">
		<label for="address">Address</label>
		<textarea id="address" name="address" placeholder="Address">{{ $showcase->address }}</textarea>
	</div>
	<div class="field">
		<input id="is-active" type="checkbox" name="active[]" value="{{ $showcase->active }}" {{ $showcase->active ? 'checked' : '' }}>
		<label for="is-active">
			Active
		</label>
		
	</div>
	<br/>
	<button type="submit" class="btn btn--primary">Update Showcase</button>
	@include('errors')
</form>
<br/>
<form method="POST" action="/admin/showcases/{{ $showcase->id }}">
	@csrf
	@method('DELETE')
	<button class="btn btn--secondary" type="submit">Delete Showcase</button>
</form>
</div>
@endsection