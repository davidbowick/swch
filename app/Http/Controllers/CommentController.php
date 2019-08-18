<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Post;
use App\User;
use Auth;
use Illuminate\Http\Request;
use App\Notifications\CommentNotification;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        return response()->json($post->comments()->with('user')->latest()->get());
    }
  
    public function store(Request $request, Post $post)
    {
        $liked_by = Auth::user();
        $comment = $post->comments()->create([
            'comment' => $request->comment,
            'user_id' => $liked_by->id
        ]);
        $post_user = $post->user_id;
        // return $post_user;
        $comment = Comment::where('id', $comment->id)->with('user')->first();
        $comment_notification = [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug
            ],
            'post_user' => [
                'id' => $post->user_id,
                'name' => $post->user->name,
                'username' => $post->user->username
            ],
            'notified_by' => [
                'id' => $liked_by->id,
                'name' => $liked_by->name,
                'username' => $liked_by->username
            ],
            'comment' => $comment->comment
        ];
        User::find($post_user)->notify(new CommentNotification($comment_notification));
        // dd($comment_notification);
        // $post_user->notify(new CommentNotification($comment_notification));
        // dd($comment_notification);
        return $comment->toJson();
    }
}
