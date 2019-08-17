<div class="post anim-in" data-prompt="{{ $post->prompt->id}}" data-prompt-title="{{$post->prompt->title}}" data-prompt-slug="{{ $post->prompt->slug }}" data-song-id="{{ $post->id }}" data-plays="" data-title="{{ $post->title }}" data-audio="{{ $post->filename ? '/storage/uploads/mp3s/'.$post->filename : 'null' }}" data-user-name="{{$post->user->name}}">
	<div class="post_player">
		<div class="post__inner flex">
			@if ($post->filename)
			<audio src="/storage/uploads/mp3s/{{ $post->filename }}"></audio>
			@endif 
			<div class="post__cover">
				<img src="/storage/uploads/avatars/{{ $post->user->avatar }}">
				@if ($post->filename)
				<a href="/play/{{ $post->id }}" class="no-link play-pause-btn"><i class="fa fa-play"></i></a>
				@endif
			</div>
			<div class="post__detail">
				<h4 class="post_title h3"><a href="/{{$post->user->username}}/{{ $post->slug }}">"{{ $post->title }}"</a></h4>
				<b class="post_artist"><a href="/{{$post->user->username}}">{{ $post->user->name}}</a></b>
				<a href="/prompts/{{ $post->prompt->slug }}" class="the-tag--mobile medium-up--hide">
					<i class="fa fa-tag"></i> 
					{{ str_limit($post->prompt->title, 20,'...') }}

				</a>
				@if ($post->filename)
				<div class="loading"></div>
				<div class="progress"></div>
				@endif
				<div class="post__buttons">
					@if ($post->filename)
					<a href="/play/{{ $post->id }}" class="play-pause-btn no-link">
						<i class="fa fa-play"></i> 
						<span class="play-count">{{ $post->play_count }}</span>
					</a>
					@endif
					<a  href="/post/like/{{ $post->id }}" 
						class="like {{ $post->isLiked ? 'liked' : '' }} no-link"
						data-song-id="{{ $post->id }}" 
						data-user-id="{{ $post->user_id }}">
						<i class="fa fa-heart"></i> 
						<span class="like-count">{{ $post->likes->count() }}</span>
					</a>
					<a href="/prompts/{{ $post->prompt->slug }}" class="the-tag small--hide">
						<i class="fa fa-tag"></i> 
						{{-- {{ $post->prompt->title }} --}}
						{{ str_limit($post->prompt->title, 20,'...') }}
					</a>
					<a href="#" class="post__comment-link no-link">
						<i class="fa fa-comment"></i> 
						<span class="comment-count">{{ $post->comments->count() }}</span>
					</a>
					<a 	href="/{{$post->user->username}}/{{$post->slug}}" 
						class="share" 
						data-song-link="/{{$post->user->username}}/{{$post->slug}}" data-song-name="{{$post->title}}" 
						data-song-id="{{$post->id}}">
						<i class="fa fa-share"></i>
					</a>
					@if ($post->lyrics)
					<a href="#" class="show-lyrics no-link">LYRICS</a>
					@endif
					@if ($post->type) 
					<a href="#" class="post-type no-link">{{ $post->type }}</a>
					@endif

				</div>
				<div class="bars" style="display: none;">
					<img src="https://s3.amazonaws.com/songwritingchallenge/images/audio-playing.gif">
				</div>
				<div class="time"></div>
			</div>
		</div>
		@if ($post->lyrics)
		<div class="post__lyrics" style="display: none;">
			<p>{!! str_ireplace($post->prompt->title,'<b>'.$post->prompt->title.'</b>',nl2br(e($post->lyrics))) !!}</p>
			{{-- <p>{!! nl2br(e($post->lyrics)) !!}</p> --}}
		</div>
		@endif
		<div class="post__comments" style="display: none;">
			@if ($post->comments->count())
			@foreach ($post->comments as $comment)
			<div class="post__comment flex flex--align-center {{ array('odd', 'even')[($loop->iteration)%2] }}">
				<div class="post__comment--user">
					<a href="/{{$post->user->username}}">
						<img src="/storage/uploads/avatars/{{ $comment->user->avatar }}" width="20" />
					</a>
				</div>
				<div class="post__comment--text">{{ $comment->comment }}</div>
			</div>
			@endforeach
			@endif
			<form action="/posts/{{ $post->id }}/comments" method="POST" class="comment-form" autocomplete="off">
				@csrf
				<input name="comment" type="text" placeholder="What do you think?"></textarea>
				<input type="hidden" value="{{ Auth::id() }}" name="user_id">
				<input type="hidden" value="{{ $post->id }}" name="post_id">
				<button class="btn btn--dark" type="submit" >Submit</button>
			</form>
		</div>
	</div>
</div>