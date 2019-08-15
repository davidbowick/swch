<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\User;
use App\Post;
use App\Profile;
use App\Prompt;
use Response;

class SearchController extends Controller
{
    public function index() 
    {
    	return view('search.search');
    }
    public function search(Request $request) 
    {
        $total_results = 0;
        $query = $request->q;
        $posts = Post::where('title','LIKE','%'.$query.'%')->get();
        $users = User::with('posts')->where('name','LIKE','%'.$query.'%')->orWhere('email','LIKE','%'.$query.'%')->get();
        $prompts = Prompt::where('title','LIKE','%'.$query.'%')->get();
        # Count 'em up!
        $posts->count() ? $total_results += $posts->count() : '';
        $users->count() ? $total_results += $users->count() : '';
        $prompts->count() ? $total_results += $prompts->count() : '';
        // dd($request);
        if($request->ajax()) {
            // return view('search.autocomplete',compact('users','posts','prompts'));
            if($query) {
                return Response::json([
                    'query' => $query,
                    'total_results' => $total_results,
                    'posts' => $posts->toArray(),
                    'users' => $users->toArray(),
                    'prompts' => $prompts->toArray()
                ]);
            } else {
                return view('search.search',compact('users','query','posts','prompts','total_results'));    
            }
        } else {
            return view('search.search',compact('users','query','posts','prompts','total_results'));
        }
    }
}
