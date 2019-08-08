<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Mail;

class PageController extends Controller
{
    public function contact() 
    {
    	return view('pages.contact');
    }
    public function contactSubmit(Request $request) {
    	$to_name = 'SWCH';
    	$to_email = 'swch.board@gmail.com';
    	$data = $request;
    	Mail::send('emails.contact',$data,function($message) use ($to_name, $to_email) {
    		$message->to($to_email,$to_name)->subject('SWCH Contact Form Submission');
    		$message->from($request->email,$request->name);
    	});

    }
}
