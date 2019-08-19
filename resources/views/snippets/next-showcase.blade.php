<div class="next-showcase">
    <h4 class="grey">
        Next Showcase
        @if(Auth::user()->type == 'admin')
        <a class="float-right" href="/admin/showcases/{{$showcase->id}}/edit"><i class="fa fa-cog"></i></a>
        @endif 
    </h4>
    <h3>
        <a href="/showcase/{{$showcase->id}}">
            <span class="h3 next-showcase__venue">{{ $showcase->venue }}</span>
            <span class="h4 next-showcase__datetime">{{ $showcase->date_time->format('M j, Y | ga') }}</span>
        </a>
    </h3>
    <button data-event-id="{{ $showcase->id }}" data-user-id="{{ Auth::id() }}" class="im-going {{ $showcase->isLiked ? 'liked' : '' }}">
        <span class="icon"><i class="fa fa-{{ $showcase->isLiked ? 'thumbs-up' : 'question' }}"></i></span>
        <span class="button-text">{{ $showcase->isLiked ? 'I\'ll Be There!' : 'Be there?' }}</span>
    </button>
    <br/>
    @if ($users_attending)
    <p class="grey"><a class="total-attendees" href="/showcase/{{$showcase->id}}">{{$users_attending}} user{{ $users_attending > 1 ? 's' : '' }} attending</a></p>
    @else 
    <br>
    @endif
    <a class="is-link btn" href="/showcase/{{ $showcase->id }}"><i class="fa fa-info-circle"></i> More Details</a>

</div>