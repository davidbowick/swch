<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prompt extends Model
{
    protected $fillable = [
        'title', 'active','slug'
    ];
    public function posts() 
    {
    	return $this->hasMany(Post::class);
    }
    public function getTotalLikesAttribute() 
    {
    	return $this->hasMany(Like::class)->where('likeable_id',$this->id)->count();
    }
    public function getTotalPlays()
    {
    	// return $this->hasMany(Post::class)->where('play')
    }
    public function showcase() 
    {
        return $this->belongsTo(Showcase::class, 'showcase_id');
    }
}
