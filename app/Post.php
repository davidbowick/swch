<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use Illuminate\Support\Str;
use Auth;

class Post extends Model
{
    protected $table = 'posts';
	protected $fillable = [
        'title','lyrics','filename','user_id','prompt_id','slug','play_count'
    ];
    public function user() 
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function prompt() 
    {
    	return $this->belongsTo(Prompt::class, 'prompt_id');
    }
    public function likes() 
    {
    	return $this->morphToMany('App\User','likeable')->whereDeletedAt(null);
    }
    // public function comments() 
    // {
    //     return $this->morphToMany('App\Post','comments');
    // }
    public function comments() 
    {
        return $this->hasMany('App\Comment');
    }
    public function getIsLikedAttribute($user_id) 
    {
        if(Auth::user()){
            $user_id = Auth::user()->id;
            $like = $this->likes()->whereUserId($user_id)->first();
            return (!is_null($like)) ? true : false;
        }   
        
    }
    public function setSlugAttribute($value)
    {
        $this->attributes['slug'] = Str::slug($value);
    }
}
