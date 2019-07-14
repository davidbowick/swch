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
	protected $fillable = ['title','lyrics','filename','slug'];
    public function show($param) 
    {
        $post = Post::where('id', $param)
                ->orWhere('slug', $param)
                ->firstOrFail();
    }
	public function create()
    {
    	// $user = Auth::user();
    	$prompts = Prompt::all();
        return view('posts.create', compact('prompts'));
    }
    public function store(Post $post)
    {
    	// dd(request()->all());
        $user = Auth::user();
        // setSlugAttribute
        $request = request();
        $request->merge([
            'slug' => str_slug(request()->get('title'))
        ]);
        $request->validate([
            'title' => 'required|min:3|max:255|regex:[A-Za-z1-9]',
            'user_id' => 'required',
            'slug' => 'required',
            'prompt_id' => 'required',
            'filename' => 'nullable|mimes:audio/mp3,mpga,mp3|max:8000',
            'lyrics' => 'nullable|regex:[A-Za-z1-9]'
        ]);
        if($request->filename) {
            // dd($request->filename);
            $fileName = $user->id.''.$request->slug.'.'.$request->filename->getClientOriginalExtension();
            $request->filename->storeAs('storage/uploads/','mp3/'.$fileName);
            $request->filename = $fileName;
        }
        Post::create([
            'title' => request('title'),
            'user_id' => request('user_id'),
            'slug' => str_slug(request()->get('title')),
            'prompt_id' => request('prompt_id'),
            'filename' => $fileName,
            'lyrics' => request('lyrics')
        ]);
    
        return redirect('/'.Auth::user()->username);
    }
    public function increasePlayCount($id) {
        $post = Post::where('id',$id)->firstOrFail();
        $post->increment('play_count');
        return $post->play_count;
    }
}
