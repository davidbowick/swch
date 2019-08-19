<?php

namespace App\Http\Controllers;
use App\User;
use App\Profile;
use App\Post;
use Auth;
use Illuminate\Http\Request;
use Illuminiate\Database\Eloquent\ModelNotFoundException;
use Image;

class ProfilesController extends Controller
{
    public function show($username)
    {
    	try
    	{
    		$user = User::with('profile')->where('username',$username)->firstOrFail();
            return view('profiles.show',compact('user'));
    	}
    	catch(ModelNotFoundException $e)
    	{
    		redirect('/');
    	}
    }
    public function showFollowers($username)
    {
        try
        {
            $user = User::with('profile')->where('username',$username)->firstOrFail();
            return view('profiles.followers',compact('user'));
        }
        catch(ModelNotFoundException $e)
        {
            redirect('/');
        }
    }
    public function showSinglePost($username,$param) 
    {
        $user = User::with('profile')->where('username',$username)->firstOrFail();
        $showComments = false;
        $post = Post::where('id', $param)
                ->orWhere('slug', $param)
                ->firstOrFail();
        return view('posts.show',compact('user','post','showComments'));
    }
    public function showSinglePostWithComments($username,$param) 
    {
        $user = User::with('profile')->where('username',$username)->firstOrFail();
        $showComments = true;
        $post = Post::where('id', $param)
                ->orWhere('slug', $param)
                ->firstOrFail();
        return view('posts.show',compact('user','post','showComments'));
    }
    public function edit($username) 
    {
        $user = User::where('username',$username)->firstOrFail();
        return view('profiles.edit',compact('user'));
    }
    public function update($username) {    
        $url_regex = 'nullable|regex:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/'; 
        $request  = request();
        $user = Auth::user();
        $validated = $request->validate([
            'website' => $url_regex,
            'facebook_url' => $url_regex,
            'twitter_url' => $url_regex,
            'youtube_url' => $url_regex,
            'instagram_url' => $url_regex,
        ]);
        $user->profile->update($validated);
        if($request->avatar) {
            $request->validate([
                'avatar' => 'required|image|mimes:jpeg,jpg|max:1000',
            ]);
            $avatarName = $user->id.'_avatar'.time().'.'.request()->avatar->getClientOriginalExtension();
            $request->avatar->storeAs('uploads/avatars',$avatarName);
            $user->update([
                'avatar' => $avatarName
            ]);
        }
        return redirect('/'.$username);
    }
    public function update_avatar(Request $request)
    {

    }
}
