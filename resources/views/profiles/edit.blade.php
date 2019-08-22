@extends('layouts.app')
@section('content')
<hr class="hr--invisible" />
<div class="container--tiny">
	<h1>Edit Profile</h1>
	<form enctype="multipart/form-data" method="POST" action="/update-profile/{{$user->username}}">
		@csrf

		<div class="field flex flex--align-center">
			<div class="profile-edit__image">
				<img src="/storage/uploads/avatars/{{ $user->avatar }}" >
			</div>
			<div class="profile-edit__image-input">
				<label for="avatar">Profile Image</label>
				<input type="file" name="avatar">
				@error('avatar')
				<div class="alert alert-danger" role="alert">
					{{ $message }}
				</div>
				@enderror
			</div>
		</div>

		
		<div class="field">
			<label for="bio">Bio</label>
			<textarea name="bio">{{old('bio',$user->profile->bio) }}</textarea>
		</div>
		<div class="field">
			<label for="website">Website</label>
			<input type="text" name="website" value="{{old('website',$user->profile->website) }}">
			@error('website')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<label for="city">City</label>
			<input type="text" name="city" value="{{old('city',$user->profile->city) }}">
		</div>
		<div class="field">
			<label for="state">State</label>
			<input type="text" name="state" value="{{old('state',$user->profile->state) }}">
		</div>
		<div class="field">
			<label for="facebook_url">Facebook</label>
			<input type="text" name="facebook_url" value="{{old('facebook_url',$user->profile->facebook_url) }}">
			@error('facebook_url')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<label for="instagram_url">Instagram</label>
			<input type="text" name="instagram_url" value="{{old('instagram_url',$user->profile->instagram_url) }}">
			@error('instagram_url')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<label for="twitter_url">Twitter</label>
			<input type="text" name="twitter_url" value="{{old('twitter_url',$user->profile->twitter_url) }}">
			@error('twitter_url')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<label for="youtube">Youtube</label>
			<input type="text" name="youtube_url" value="{{old('youtube_url',$user->profile->youtube_url) }}">
			@error('youtube_url')
			<div class="alert alert-danger" role="alert">
				{{ $message }}
			</div>
			@enderror
		</div>
		<div class="field">
			<button type="submit" class="btn btn--primary">Update Profile</button>
		</div>
	</form>
	<a href="/change-password">Change Password</a>
</div>
<hr class="hr--invisible hr--double-margin" />
@endsection