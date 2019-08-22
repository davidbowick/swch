<?php

namespace App\Http\Controllers;
use App\Prompt;
use App\Showcase;
use App\User;
use App\Post;
use App\Like;
use Auth;
use Hash;
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
    public function showChangePasswordForm() {
        return view('auth.changepassword');
    }
    public function updatePassword(Request $request) {
        $user = Auth::user();
        if(!(Hash::check($request['old_password'], $user->password))) {
            return response()->json(['errors' => ['current' => ['Current password does not match']]], 422);
        }
        if($request['old_password'] == $request['new_password']) {
            return response()->json(['errors' => ['current' => ['Current password does not match']]], 422);
        }
        $validated = $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|string|min:8|required_with:password_confirm',
            'password_confirm' => 'same:new_password'
        ]);
        // Finally do it
        $user->password = Hash::make($request['new_password']);
        $user->save();
        return redirect('/');
    }    
}
