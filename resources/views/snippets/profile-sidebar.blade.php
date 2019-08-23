<div class="main-profile-pic">
	<a href="/{{$user->username}}">
		<img alt="{{$user->name}}'s Profile Image" src="/storage/uploads/avatars/{{ $user->avatar }}" >
	</a>
	<a class="profile-name" href="/{{$user->username}}">{{$user->name}}</a>
	@if(Auth::user())
	@if (Auth::user()->id == $user->id)
	<a class="edit-profile" href="/{{$user->username}}/edit"><i class="fa fa-cog"></i></a>
	@endif
	@endif
</div>
<hr class="hr--invisible">
<div class="flex flex--align-center flex--justify-space-between">
	<a href="/user/like/{{ $user->id }}" class="btn no-link follow-btn {{ $user->isLiked ? 'liked' : '' }}">
		<i class='fa fa-star'></i>
		<span class="like-text">{{ $user->isLiked ? 'Following' : 'Follow' }}</span>
	</a>
	<div>
		<a href="/{{$user->username}}/followers"><small class="grey">Followers: {{ $user->likes->count() }}</small></a><br/>
	</div>

</div>
<div class="flex flex--wrap user--followers-list">
	@foreach($user->likes as $follower)
		<a data-tooltip="{{$follower->name}}" class="user-mini-link one-sixth" href="/{{$follower->username}}"><img width="30" alt="" src="/storage/uploads/avatars/{{$follower->avatar}}"><span class="visually-hidden">{{$follower->name}}</span></a>
	@endforeach
</div>
@if ($user->profile)
@if ($user->profile->bio)
<div class="profile__quote">
	<p>{{ $user->profile->bio }}</p>
</div>
@endif
<div class="profile__meta">
	<ul class="profile__social-links">
		@if ($user->profile->website)
		<li>
			<a href="{{ $user->profile->website }}" class="no-link" target="_blank">
				<i class="fa fa-link"></i>
				<span class="visually-hidden">{{$user->name}}'s Official Website</span>
			</a>
		</li>
		@endif
		@if ($user->profile->twitter_url)
		<li>
			<a href="{{ $user->profile->twitter_url }}" class="no-link" target="_blank">
				<i class="fa fa-twitter"></i>
				<span class="visually-hidden">{{$user->name}} on Twitter</span>
			</a>
		</li>
		@endif 
		@if ($user->profile->facebook_url)
		<li>
			<a href="{{ $user->profile->facebook_url }}" class="no-link" target="_blank">
				<i class="fa fa-facebook"></i>
				<span class="visually-hidden">{{$user->name}} on Facebook</span>
			</a>
		</li>
		@endif 
		@if ($user->profile->instagram_url)
		<li>
			<a href="{{ $user->profile->instagram_url }}" class="no-link" target="_blank">
				<i class="fa fa-instagram"></i>
				<span class="visually-hidden">{{$user->name}} on Instagram</span>
			</a>
		</li>
		@endif 
		@if ($user->profile->youtube_url)
		<li>
			<a href="{{ $user->profile->youtube_url }}" class="no-link" target="_blank">
				<i class="fa fa-youtube"></i>
				<span class="visually-hidden">{{$user->name}} on Youtube</span>
			</a>
		</li>
		@endif 
	</ul>
	@if ($user->profile->city)
	<p><b>City:</b> {{ $user->profile->city }}</p>
	@endif 
	@if ($user->profile->state)
	<p><b>State:</b> {{ $user->profile->state }}</p>
	@endif
	@if ($user->profile->country)
	<p><b>Country:</b> {{ $user->profile->country }}</p>
	@endif
	@if ($user->posts->count())
	<p><b>Songs Contributed:</b> {{ $user->posts->count() }}</p>
	@endif 
	<p><b>Member since:</b> {{$user->created_at->format('M Y') }}</p>
</div>
@endif