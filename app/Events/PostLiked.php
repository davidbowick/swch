<?php

namespace App\Events;


use App\User;
use Auth;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PostLiked implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $name;
    public $message;
    public $data;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($notifier)
    {
        $this->data = array(
            'user'=> $notifier['user'],
            'post'=> $notifier['post'],
            'liked_by' => $notifier['liked_by'],
            'type'=> $notifier['type']
        );
        if($notifier['type'] == 'like') {
            $this->message = '<a href="/' . $notifier['liked_by']->username . '">' . $notifier['liked_by']->name . '</a> liked <a href="/' . $notifier['user']->username . '/' . $notifier['post']->slug . '">' . $notifier['post']->title .'</a>';
        }
        if($notifier['type'] == 'comment') {
            $url = '/' . $notifier['user']->username . '/' . $notifier['post']->slug . '/comments';
            $this->message = '<a href="' . $url . '">' . $notifier['liked_by']->name . '</a> commented on <a href="' . $url . '">' . $notifier['post']->title .'</a>';
        }
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        // return new PrivateChannel('notifications');
        return ['notifications.' . $this->data['user']->id];
    }

    public function broadcastAs()
    {
      return 'post-liked';
    }
}
