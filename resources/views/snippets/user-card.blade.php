<div class="user-card flex flex--align-center">
	<a href="/{{$user->username}}"></a>
	<div class="user-card__image">
		<img src="/storage/uploads/avatars/{{ $user->avatar }}" >
	</div>
	<div class="user-card__info">
		{{ $user->name }}
		<div class="user-card__meta">
			Submissions: {{ $user->posts->count() }}
		</div>
	</div>
</div>