<?php

namespace App;
use Auth;
use App\Like;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','avatar','username'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    const ADMIN_TYPE = 'admin';
    const DEFAULT_TYPE = 'default';
    
    public function isAdmin() {
        return $this->type === self::ADMIN_TYPE;
    }

    public function getFirstName() {
        $name = $this->name;
        return explode(' ',$name, 2)[0];
        // return $name[0];
    }

   
    
    public function profile() 
    {
        return $this->hasOne('App\Profile');
    }

    public function posts() {
        return $this->hasMany(Post::class);
        // return $this->hasMany(Post::class,'user_id');
    }

    public function likedPosts() {
        return $this->morphedByMany('App\Post','likeable')->whereDeletedAt(null);
    }

    public function likes() 
    {
        return $this->morphToMany('App\User','likeable')->whereDeletedAt(null);
    }

    public function getIsLikedAttribute() 
    {
        if(Auth::user()) {
            $user_id = Auth::user()->id;
            $like = $this->likes()->whereUserId($user_id)->first();
            return (!is_null($like)) ? true : false;    
        }
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

}
