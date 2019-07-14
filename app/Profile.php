<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
	protected $fillable = [
        'website',
        'city',
        'state',
        'country',
        'bio',
        'facebook_url',
        'twitter_url',
        'instagram_url',
        'youtube_url'
    ];
	
    public function user() 
    {
    	return $this->belongsTo('App\User');
    }
}
