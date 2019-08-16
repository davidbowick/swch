@if ($posts)
<script type="text/javascript">
    var playlist = {};
    playlist.songs = [];
    @foreach ($posts as $post)
        @if ($post->filename)
        playlist.songs.push({
            id: {{$post->id}},
            title: "{{$post->title}}",
            slug: "{{$post->slug}}",
            file: "{{$post->filename}}"
        });
        @endif
    @endforeach
</script>
@endif