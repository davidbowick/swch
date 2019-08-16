<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use App\Notifications\LikeNotification;
use App\Like;
// use SoftDeletes;

class LikeController extends Controller
{
    public function likeUser($id) 
    {
        $likeReturn = $this->handleLike('App\User',$id);
        return $likeReturn;
    }
    public function likePost($id) 
    {
    	$likeReturn = $this->handleLike('App\Post',$id);
        return $likeReturn;
    }
    public function likeShowcase($id)
    {
        $likeReturn = $this->handleLike('App\Showcase',$id);
        return $likeReturn;   
    }
    public function handleLike($type,$id)
    {
    	$existing_like = Like::withTrashed()->whereLikeableType($type)->whereLikeableId($id)->whereUserId(Auth::id())->first();
    	if(is_null($existing_like)) {
    		Like::create([
    			'user_id'		=> Auth::id(),
    			'likeable_id'	=> $id,
    			'likeable_type' => $type
    		]);
            User::find($id)->notify(new LikeNotification);
            $liked = true;
    	} else {
    		if(is_null($existing_like->deleted_at)) {
    			$existing_like->delete();
                $liked = false;
    		} else {
    			$existing_like->restore();
                User::find($id)->notify(new LikeNotification);
                $liked = true;

    		}
    	}
        $total_likes = Like::whereLikeableType($type)->whereLikeableId($id)->count();
        return response()->json(['success'=> $liked,'total_likes'=>$total_likes]);
    }
}
