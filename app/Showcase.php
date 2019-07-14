<?php

namespace App;
use Auth;
use App\Like;
use DateTime;
use Illuminate\Database\Eloquent\Model;

class Showcase extends Model
{
    protected $fillable = ['venue','date_time','address','active'];
    protected $dates = ['date_time'];
    public function likes() 
    {
    	return $this->morphToMany('App\User','likeable')->whereDeletedAt(null);
    }
    public function getIsLikedAttribute() 
    {
        $user_id = Auth::user()->id;
    	$like = $this->likes()->whereUserId($user_id)->first();
    	return (!is_null($like)) ? true : false;
    }
    public function users() 
    {
        return $this->morphToMany('App\User','likeable');
    }
    public function prompts() 
    {
        return $this->hasMany(Prompt::class);
    }
    public function isUpcoming() 
    {
        $date = $this->date_time;
        $now = new DateTime();
        if($date < $now) {
            return false;
        } else {
            return true;
        }

    }

}
