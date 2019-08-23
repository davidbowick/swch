<div class="user-card flex flex--align-center">
	<a href="/{{$user->username}}"></a>
	<div class="user-card__image">
		<img src="{{s3_avatar_image('medium',$user->avatar)}}" >
	</div>
	<div class="user-card__info">
		{{ $user->name }}
		<div class="user-card__meta">
			Submissions: {{ $user->posts->count() }}
		</div>
	</div>
</div>