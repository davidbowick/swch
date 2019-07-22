<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(PromptsTableSeeder::class);
        $this->call(ShowcasesTableSeeder::class);
        $this->call(ProfilesTableSeeder::class);
        $this->call(PostsTableSeeder::class);
        $this->call(LikeablesTableSeeder::class);
        $this->call(FaqTableSeeder::class);
    }
}
class UsersTableSeeder extends Seeder 
{
	public function run() 
	{
		DB::table('users')->delete();
		$pw = bcrypt('11111111');
		App\User::create([
			'email'=>'dbowick@gmail.com',
			'name'=>'David Bowick',
			'username'=>'davidbowick',
			'avatar'=>'admin.jpg',
			'password'=> $pw,
			'type'=>'admin'
		]);
		App\User::create([
			'email'=>'olivebowick@gmail.com',
			'name'=>'Olive',
			'avatar'=>'olive.jpg',
			'username'=>'olive',
			'password'=> $pw
		]);
	}
}
class PromptsTableSeeder extends Seeder 
{
	public function run() 
	{
		DB::table('prompts')->delete();
		App\Prompt::create([
			'title'=>'Seeder Title',
			'slug'=>'seeder-title',
			'showcase_id'=>1,
			'active'=>1
		]);
		App\Prompt::create([
			'title'=>'Another Title',
			'slug'=>'another-title',
			'showcase_id'=>1,
			'active'=>1
		]);
	}
}
class ShowcasesTableSeeder extends Seeder 
{
	public function run() 
	{
		DB::table('showcases')->delete();
		App\Showcase::create([
			'venue'=>'David\'s Place',
			'date_time'=>'2019-07-22',
			'address'=>'1838 Barry Ave. #12',
			'lat'=>'34.0398158',
			'lng'=>'-118.4529809',
			'active'=>1
		]);
	}
}
class ProfilesTableSeeder extends Seeder 
{
	public function run() 
	{
		DB::table('profiles')->delete();
		App\Profile::create([
			'user_id'=>1,
			'website'=>'http://davidbowick.com',
			'bio'=>'Inspiration is an impatient mistress',
			'city'=>'Los Angeles',
			'state'=>'CA',
			'country'=>'United States',
			'facebook_url'=>'https://facebook.com/davidbowick',
			'twitter_url'=>'https://twitter.com/davidbowick',
			'youtube_url'=>'https://youtube.com/davidbowick',
			'instagram_url'=>'https://instagram.com/davidbowick'
		]);
	}
}
class PostsTableSeeder extends Seeder 
{
	public function run() 
	{
		DB::table('posts')->delete();
		App\Post::create([
			'title'=>'I\'m A little teapot',
			'slug'=>'im-a-little-teapot',
			'lyrics'=>'I\'m a litte teapot, short and stout',
			'filename'=>'ham.mp3',
			'user_id'=>1,
			'prompt_id'=>1
		]);
		App\Post::create([
			'title'=>'Olive\'s First Song',
			'slug'=>'olives-first-song',
			'lyrics'=>'I\'m a litte doggly, effin\' cute',
			'user_id'=>2,
			'prompt_id'=>1
		]);
	}
}
class LikeablesTableSeeder extends Seeder 
{
	public function run() 
	{
		DB::table('likeables')->delete();
		App\Like::create([
			'user_id'=>1,
			'likeable_id'=>2,
			'likeable_type'=>'App\User'
		]);
		App\Like::create([
			'user_id'=>1,
			'likeable_id'=>2,
			'likeable_type'=>'App\Post'
		]);
		App\Like::create([
			'user_id'=>1,
			'likeable_id'=>1,
			'likeable_type'=>'App\Showcase'
		]);
		App\Like::create([
			'user_id'=>2,
			'likeable_id'=>1,
			'likeable_type'=>'App\User'
		]);
	}
}
class FaqTableSeeder extends Seeder 
{
	public function run() 
	{
		DB::table('faqs')->delete();
		App\Faq::create([
			'question'=>'What\'s the deal with airline FAQs?',
			'answer'=>'I mean what is the deal!?'
		]);
	}
}