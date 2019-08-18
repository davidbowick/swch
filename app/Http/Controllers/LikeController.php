<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use App\Post;
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
        $post = Post::find($id);
        $post_user = User::find($post->user_id);
        $liked_by = Auth::user();
        /*$like_notification = [
            'user_id' => $post_user,
            'post_id' => $id,
            'liked_by' => $liked_by
        ];*/
        $like_notification = [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug
            ],
            'post_user' => [
                'id' => $post_user->user_id,
                'name' => $post_user->name,
                'username' => $post_user->username
            ],
            'notified_by' => [
                'id' => $liked_by->id,
                'name' => $liked_by->name,
                'username' => $liked_by->username
            ]
        ];
    	if(is_null($existing_like)) {
    		$existing_like = Like::create([
    			'user_id'		=> Auth::id(),
    			'likeable_id'	=> $id,
    			'likeable_type' => $type
    		]);
            User::find($post->user_id)->notify(new LikeNotification($like_notification));
            $liked = true;
    	} else {
    		if(is_null($existing_like->deleted_at)) {
    			$existing_like->delete();
                $liked = false;
                // LikeNotification::find()
                // LikeNotification::where('data', 'LIKE', '%'.$like_notification.'%')->delete();

    		} else {
    			$existing_like->restore();
                // User::find($post_user)->notify(new LikeNotification($like_notification));
                $liked = true;
    		}
    	}
        // dd($existing_like);
        $total_likes = Like::whereLikeableType($type)->whereLikeableId($id)->count();
        return response()->json(['success'=> $liked,'total_likes'=>$total_likes]);
    }
}
