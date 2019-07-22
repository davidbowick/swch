<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function contact() 
    {
    	return view('pages.contact');
    }
}
