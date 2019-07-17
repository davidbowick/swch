@extends('layouts.app')
@section('content')

<div id="page-content" class="flex">

	<div class="sidebar">
		<div class="sidebar__inner" data-sticky="true">
			<h1>{{$showcase->venue}}</h1>
			<time datetime="{{ $showcase->date_time->format('Y-m-d') }}" class="icon">
				<em>{{ $showcase->date_time->format('l') }}</em>
				<strong>{{ $showcase->date_time->format('F') }}</strong>
				<span>{{ $showcase->date_time->format('j') }}</span>
			</time>
			<h4 class="h4">
				{{-- {{ $showcase->date_time->format('M j, Y | ga') }} --}}
				<br/>
				{{ $showcase->address}}
			</h4>
			<h3>Prompts</h3>
			<ul>
				@foreach($showcase->prompts as $prompt)
				<li><a class="no-underline" href="/prompts/{{$prompt->slug}}"><b>{{ $prompt->title }}</b></a></li>
				@endforeach
			</ul>
		</div>
	</div>
	<div class="main no-right-padding no-top-padding">
		<div id="showcase-map"></div>
		<hr class="hr--invisible">
		<h3>{{ $users_attending->count() }} Users {{ $showcase->isUpcoming() ? 'Attending' : 'Attended' }}</h3>
		@foreach($showcase->users as $user)
			@include('snippets.user-card')
		@endforeach
	</div>
</div>
<script src="//unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
<script>
	var showcaseLat = {{$showcase->lat}};
	var showcaseLng = {{$showcase->lng}};
	var map = L.map('showcase-map',{ center: [showcaseLat, showcaseLng], zoom: 14});
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
	var myDataPoint = L.marker([showcaseLat, showcaseLng]).addTo(map);
	myDataPoint.bindPopup("{{$showcase->venue}}<br/>{{$showcase->address}}");

</script>
@endsection