<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use App\Mail\Contact;
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
      /*
    	$to_name = 'SWCH';
    	$to_email = 'swch.board@gmail.com';
    	$data = $request->toArray();        
        // return $from_email;
        $from_name = $request['name'];
        $from_email = $request['email'];
        if($request['birthday'] == '') {
           Mail::send('emails.contact',$data,function($message) use ($to_name, $to_email) {
              $message->to($to_email,$to_name)->subject('SWCH Contact Form Submission');
              $message->from($to_email,$to_name);
          });
       }
        */
    }
}
