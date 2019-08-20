<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use App\Mail\Contact;
use Auth;
use Mail;
use Notification;
use Illuminate\Notifications\DatabaseNotification;

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
    public function notifications() {
      if(Auth::user()) {
           $user = Auth::user();
           $unreadNotifications = $user->unreadNotifications;
           $readNotifications = $user->readNotifications;
      }
      return view('pages.notifications',compact('user','unreadNotifications','readNotifications'));
    }
    public function markAllRead() {
      $user = Auth::user();
      $user->unreadNotifications->markAsRead();
    }
    public function markSingleRead($id) {
      Auth::user()->notifications()->find($id)->markAsRead();
      return redirect()->back();
    }
}
