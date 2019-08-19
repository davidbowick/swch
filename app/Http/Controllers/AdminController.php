<?php

namespace App\Http\Controllers;
use App\Prompt;
use App\Showcase;
use App\User;
use App\Post;
use App\Like;
use DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
    	$this->middleware('auth');
    }
    public function admin() {
    	$prompts = Prompt::where('active',1)->take(2)->get();
    	$showcase = Showcase::where('active',1)->firstOrFail();
    	$users = User::latest()->take(20)->get();
    	$posts = Post::latest()->take(20)->get();
        $users_attending = Like::where('likeable_id',$showcase->id)->where('likeable_type','App\Showcase')->count();
        // dd($showcase);
    	return view('admin', compact('prompts','showcase','users','users_attending','posts'));
    }
}
