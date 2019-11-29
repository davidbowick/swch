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

class AdminEvents implements ShouldBroadcast
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
            'type'=> $notifier['type']
        );
        if($notifier['type'] == 'registration') {
        	$this->message = '<a href="/' . $notifier['user']->username . '">' . $notifier['user']->name . '</a> just signed up!' ;            
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
        return ['admin'];
    }

    public function broadcastAs()
    {
      return 'admin';
    }
}
