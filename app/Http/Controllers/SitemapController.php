<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use App\Prompt;
use App\Showcase;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
	public function index()
	{
		$post = Post::orderBy('updated_at', 'desc')->first();
		$user = User::orderBy('updated_at', 'desc')->first();
		$prompt = Prompt::orderBy('updated_at', 'desc')->first();
		$showcase = Showcase::orderBy('updated_at', 'desc')->first();
		return response()->view('sitemap.index', [
			'post' => $post,
			'user' => $user,
			'prompt' => $prompt,
			'showcase' => $showcase,
		])->header('Content-Type', 'text/xml');
	}
	public function posts()
	{
		$posts = Post::all();
		return response()->view('sitemap.posts', [
			'posts' => $posts,
		])->header('Content-Type', 'text/xml');
	}

	public function users()
	{
		$users = User::all();
		return response()->view('sitemap.users', [
			'users' => $users,
		])->header('Content-Type', 'text/xml');
	}

	public function prompts()
	{
		$prompts = Prompt::all();
		return response()->view('sitemap.prompts', [
			'prompts' => $prompts,
		])->header('Content-Type', 'text/xml');
	}

	public function showcases()
	{
		$showcases = Showcase::all();
		return response()->view('sitemap.showcases', [
			'showcases' => $showcases,
		])->header('Content-Type', 'text/xml');
	}
}
