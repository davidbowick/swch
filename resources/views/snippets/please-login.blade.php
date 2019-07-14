@if(!Auth::user())
<div class="please-login">
	<h2 class="grey">Please <a href="/login">log in</a> or <a href="/register">register</a> to listen</h2>
</div>
@endif