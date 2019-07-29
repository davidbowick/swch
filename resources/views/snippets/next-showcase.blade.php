<div class="next-showcase">
    <h4 class="grey">Next Showcase</h4>
    <h3>
        <a href="/showcase/{{$showcase->id}}">
            {{ $showcase->venue }}<br>
            <span class="h4">{{ $showcase->date_time->format('M j, Y | ga') }}</span>
        </a>
    </h3>
    <button data-event-id="{{ $showcase->id }}" data-user-id="{{ Auth::id() }}" class="im-going {{ $showcase->isLiked ? 'liked' : '' }}">
        <span class="icon"><i class="fa fa-{{ $showcase->isLiked ? 'thumbs-up' : 'question' }}"></i></span>
        <span class="button-text">{{ $showcase->isLiked ? 'I\'ll Be There!' : 'Be there?' }}</span>
    </button>
    <br/><br/>
    {{-- <a class="is-link" href="/showcase/{{ $showcase->id }}">View More</a> --}}
    @if ($users_attending)
    <p class="grey"><a class="total-attendees" href="/showcase/{{$showcase->id}}">{{$users_attending}} user{{ $users_attending > 1 ? 's' : '' }} attending</a></p>
    @endif

</div>