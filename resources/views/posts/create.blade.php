@extends('layouts.app')

@section('content')
<div class="flex small--flex-wrap">
	<div class="sidebar one-third small--one-whole ">
		<div class="sidebar__inner">
			<h2>Remember the rules</h2>
			<div class="rte">
				<p>
					You must use the prompt completely as it is <b><i>somewhere within the lyrics</i></b> of the song.
				</p>
				<p>
					If the prompt is "Silent Film", you could use it like:<br/>
					Does your life feel like a <b><i>silent film</i></b>?<br/>
				You try and write it down with no ink in the quill.</p>
			</div>
		</div>
	</div>
	<div class="main small--one-whole">
		<h1 class="title">Submit New Song</h1>
		<form id="post-form" enctype="multipart/form-data" method="POST" action="/posts">
			@csrf
			<input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
			<div class="field">
				<label for="prompt">Prompt <small>(make this ajax searchable later)</small></label>
				<select name="prompt_id">
					@foreach ($prompts as $prompt)
					<option {{ (old('prompt_id') == $prompt->id) ? 'selected="selected"' : '' }}  value="{{ $prompt->id }}">{{ $prompt->title }}</option>
					@endforeach
				</select>
			</div>
			<div class="field">
				<label for="title">Title</label>
				<input id="title" type="text" name="title" placeholder="Title" value="{{ old('title') }}">
				@error('title')
				<div class="alert alert-danger" role="alert">{{ $message }}</div>
				@enderror
			</div>
			<div class="field">
				<label for="filename">Song File <i>(mp3 only)</i></label>
				<input id="filename" type="file" name="filename" {{ old('filename') }}>
				@error('filename')
				<div class="alert alert-danger" role="alert">{{ $message }}</div>
				@enderror
				<div class="progress">
					<div class="progress-bar" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100%" style="width: 0%;"></div>
					<div class="progress-text"></div>
				</div>
				<div id="success"></div>
			</div>
			<div class="field">
				<label for="lyrics">Lyrics</label>
				<textarea id="lyrics" name="lyrics" placeholder="Lyrics">{{ old('lyrics') }}</textarea>
				@error('lyrics')
				<div class="alert alert-danger" role="alert">{{ $message }}</div>
				@enderror
			</div>
			<div class="field">
				<button type="submit" class="btn btn--primary">Submit</button>
			</div>
		</form>
	</div>
</div>
{{-- @include('errors') --}}
@endsection