@extends('layouts.app')
@section('content')

<div id="page-content" class="flex small--flex-wrap">
	<div class="sidebar small--one-whole">
		<div class="sidebar__inner" data-sticky="true">
			<h1 class="flex flex--align-center flex--justify-space-between">
				<small>
					<time datetime="{{ $showcase->date_time->format('Y-m-d') }}" class="icon">
						<em class='time-day'>{{ $showcase->date_time->format('D') }}</em>
						<strong class="time-month">{{ $showcase->date_time->format('M') }}</strong>
						<span class="time-date">{{ $showcase->date_time->format('j') }}</span>
					</time></small>
					<span>{{$showcase->venue}}</span>
					@if(Auth::user()->type == 'admin')
					<small><a class="float-right" href="/admin/showcases/{{$showcase->id}}/edit"><i class="fa fa-cog"></i></a></small>
					@endif 
				</h1>
			<p class="">
				{{ $showcase->date_time->format('M j, Y | ga') }}
				<br/>
				{{ $showcase->address}}
			</p>
			<button data-event-id="{{ $showcase->id }}" data-user-id="{{ Auth::id() }}" class="im-going {{ $showcase->isLiked ? 'liked' : '' }}">
				<span class="icon"><i class="fa fa-{{ $showcase->isLiked ? 'thumbs-up' : 'question' }}"></i></span>
				<span class="button-text">{{ $showcase->isLiked ? 'I\'ll Be There!' : 'Be there?' }}</span>
			</button>
			<hr class="hr--invisible">
			<hr class="hr--invisible">
			<h3>Prompts</h3>
			<ul>
				@foreach($showcase->prompts as $prompt)
				<li><a class="no-underline" href="/prompts/{{$prompt->slug}}"><b>{{ $prompt->title }}</b></a></li>
				@endforeach
			</ul>
		</div>
	</div>
	<div class="main no-right-padding no-top-padding small--one-whole">
		<div class="gmap_canvas relative">
			
			<iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q={{urlencode($showcase->address)}}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
		<hr class="hr--invisible">
		<h3>{{ $users_attending->count() }} {{ $users_attending->count() > 1 ? 'Users' : 'User' }} {{ $showcase->isUpcoming() ? 'Attending' : 'Attended' }}</h3>
		@foreach($showcase->users as $user)
			@include('snippets.user-card')
		@endforeach
	</div>
</div>

{{-- <script src="//unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
<script>
	var showcaseLat = {{$showcase->lat}};
	var showcaseLng = {{$showcase->lng}};
	var map = L.map('showcase-map',{ center: [showcaseLat, showcaseLng], zoom: 14});
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
	var myDataPoint = L.marker([showcaseLat, showcaseLng]).addTo(map);
	myDataPoint.bindPopup("{{$showcase->venue}}<br/>{{$showcase->address}}");

</script> --}}
@endsection