<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use App\Mail\Contact;
use Auth;
use Mail;

class PageController extends Controller
{
    public function contact() 
    {
    	return view('pages.contact');
    }
    public function contactSubmit(Request $request) {
      Mail::send(new Contact($request));
      $success = "Thank you! Can't wait to hear what you have to say.";
      return redirect()->back()->with('message',$success);
    }
    public function notifications() 
    {
      if(Auth::user()) {
           $user = Auth::user();
      }
      return view('pages.notifications',compact('user'));
    }
}
