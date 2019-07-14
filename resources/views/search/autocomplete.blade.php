@if ($users)
<h4>Users</h4>
<ul class="ajax__users-list">
	@foreach ($users as $user)
	<li>
		<a href="/{{ $user->username }}">
			<span class="s-image"><img src="/storage/uploads/avatars/{{$user->avatar}}" width="25"></span>
			<span class="s-info">{{ $user->name }}</span>
		</a>
	</li>
	@endfor
</ul>
@endif