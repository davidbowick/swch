<?php

namespace App\Http\Controllers;
use App\Prompt;
use App\Showcase;
use App\Post;
use App\Like;
use Auth;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // dd('what?');
        $prompts = Prompt::where('active',1)->take(2)->get();
        $showcase = Showcase::where('active',1)->firstOrFail();
        if($showcase) {
            $users_attending = Like::where('likeable_id',$showcase->id)->where('likeable_type','App\Showcase')->count();
        }
        $top_posts = Post::withCount('likes')->orderByDesc('likes_count')->get();
        if(Auth::user()) {
           $user = Auth::user();
           $userIds = Like::where('user_id',Auth::id())->where('likeable_type','App\User')->get('likeable_id')->toArray();
            // dd($userIds);
           $posts = Post::whereIn('user_id',$userIds)->get();
           // $posts = $top_posts;
           // dd($posts);
           return view('home',compact('posts','prompts','showcase','users_attending','user','top_posts'));
        } else {
            return view('welcome');
        }
    }

    public function welcome() 
    {

        $prompts = Prompt::where('active',1)->take(2)->get();
        $showcase = Showcase::where('active',1)->firstOrFail();
        if($showcase) {
            $users_attending = Like::where('likeable_id',$showcase->id)->where('likeable_type','App\Showcase')->count();
        }
        $top_posts = Post::withCount('likes')->orderByDesc('likes_count')->get();
        if(Auth::user()) {
           $user = Auth::user();
           $userIds = Like::where('user_id',$user->id)->get()->toArray();
           // dd($userIds);
           $posts = Post::whereIn('user_id',$userIds)->get();
           // dd($posts);
           return view('newcomer',compact('posts','prompts','showcase','users_attending','user','top_posts'));
        } else {
            return redirect('/');
        }

    }
}
