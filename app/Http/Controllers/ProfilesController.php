<?php

namespace App\Http\Controllers;
use App\User;
use App\Profile;
use App\Post;
use Auth;
use Illuminate\Http\Request;
use Illuminiate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;
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
            'bio' => 'nullable',
            'city' => 'nullable',
            'state' => 'nullable',
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
            $avatar = $request->file('avatar');
            $extension = $avatar->getClientOriginalExtension();
            $avatarName = $user->id.'_avatar'.time().'.'.$extension;
            $normal = Image::make($avatar)->resize(300,300)->encode($extension, 75);
            $medium = Image::make($avatar)->resize(150,150)->encode($extension, 75);
            $small = Image::make($avatar)->resize(24,24)->encode($extension, 75);
            Storage::disk('s3')->put('/avatars/normal/'.$avatarName, (string)$normal,'public');
            Storage::disk('s3')->put('/avatars/medium/'.$avatarName, (string)$medium,'public');
            Storage::disk('s3')->put('/avatars/small/'.$avatarName, (string)$small,'public');
            // dd($avatarName);
            // dd($path);
            // $request->avatar->storeAs('uploads/avatars',$avatarName);
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
