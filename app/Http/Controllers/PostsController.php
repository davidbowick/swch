<?php

namespace App\Http\Controllers;
use App\User;
use App\Prompt;
use App\Post;
use Auth;
// use App\String;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class PostsController extends Controller
{
	protected $fillable = ['title','lyrics','filename','slug','type']; 

    private $types;

    public function __construct() {
        $this->types = ['Phone','Demo','Rough Mix','Mix','Master'];
    }

    public function show($param) 
    {
        $post = Post::where('id', $param)
                ->orWhere('slug', $param)
                ->firstOrFail();
    }
	public function create()
    {
    	$prompts = Prompt::all()->reverse();
        $types = $this->types;
        return view('posts.create', compact('prompts','types'));
    }
    public function store(Post $post)
    {
        $user = Auth::user();
        $request = request();
        $request->merge([
            'slug' => str_slug(request()->get('title'))
        ]);
        $request->validate([
            'title' => 'required|min:3|max:255',
            'user_id' => 'required',
            'slug' => 'required',
            'type' => 'nullable',
            'prompt_id' => 'required',
            'filename' => 'nullable|mimes:audio/mp3,mpga,mp3|max:12000',
            'lyrics' => 'nullable'
        ]);
        if($request->filename) {
            $fileName = $user->id.''.$request->slug.'.'.$request->filename->getClientOriginalExtension();
            $request->filename->storeAs('uploads/mp3s',$fileName);
            $request->filename = $fileName;
        } else {
            $fileName = '';
        }
        Post::create([
            'title' => request('title'),
            'user_id' => request('user_id'),
            'slug' => str_slug(request()->get('title')),
            'prompt_id' => request('prompt_id'),
            'filename' => $fileName,
            'type' => request('type'),
            'lyrics' => request('lyrics')
        ]);
        return redirect('/'.Auth::user()->username);
    }

    public function edit(Post $post)
    {
        $prompts = Prompt::all()->reverse();
        $types = $this->types;
        return view('posts.edit',compact('post','prompts','types'));   
    }

    public function update(Request $request, Post $post)
    {
        $request->merge([
            'slug' => str_slug(request()->get('title'))
        ]);
        $validated = $request->validate([
            'title' => 'required|min:3|max:255',
            'user_id' => 'required',
            'slug' => 'required',
            'type' => 'nullable',
            'prompt_id' => 'required',
            'filename' => 'nullable|mimes:audio/mp3,mpga,mp3|max:12000',
            'lyrics' => 'nullable'
        ]);

        if($request->filename) {
            $fileName = $post->user->id.''.$request->slug.'.'.$request->filename->getClientOriginalExtension();
            $request->filename->storeAs('uploads/mp3s',$fileName);
            $request->filename = $fileName;
            $post->update([
                'filename' => $fileName
            ]);
        } 
        $post->update($validated);
        return redirect('/'.$post->user->username.'/'.$post->slug);
    }
    public function increasePlayCount($id) {
        $post = Post::where('id',$id)->firstOrFail();
        $post->increment('play_count');
        return $post->play_count;
    }
    public function getNextSong($id) {
        $post = Post::with('likes')->with('user')->with('prompt')->where('id',$id)->firstOrFail();
        return $post;
    }
}
