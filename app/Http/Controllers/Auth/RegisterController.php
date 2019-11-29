<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Like;
use App\Profile;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Notifications\AdminNotifications;
use Illuminate\Notifications\Notifiable;
use App\Events\AdminEvents;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers, Notifiable;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        Validator::extend('birthday',function($attribute,$value, $parameters) {
            return $value == '';
        });
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:50'],
            'birthday' => 'birthday',
            'username' => ['required','string','max:20','unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        //dd($data);
        
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'username' => str_slug($data['username'],'-'),
            'password' => Hash::make($data['password']),
            'type' => User::DEFAULT_TYPE,
        ]);    

        Like::create([
            'user_id' => $user->id,
            'likeable_id' => 1,
            'likeable_type' => 'App\User'
        ]);

        Like::create([
            'user_id' => 1,
            'likeable_id' => $user->id,
            'likeable_type' => 'App\User'
        ]);

        Profile::create([
            'user_id' => $user->id
        ]);

        $this->notifier['user'] = $user;
        $this->notifier['type'] = 'new_registration';
        event(new AdminEvents($this->notifier));
        $admins = User::where('type', 'admin');
        if ($admins) {
            // $admins->notify(new AdminNotifications($user));
        }
        // User::where('type','admin')->notify(new AdminNotifications($user));
        // User::find($post->user_id)->notify(new LikeNotification($like_notification));


        $user->sendEmailVerificationNotification();

        return $user;
    }
}
