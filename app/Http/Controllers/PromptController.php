<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Prompt;
use App\Post;
use Auth;

class PromptController extends Controller
{
    protected $fillable = ['title','active','slug'];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prompts = Prompt::all();
        return view('admin.prompts.index',compact('prompts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.prompts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3|max:255',
            'active' => 'nullable'
        ]);
        $slug = str_slug($request->title);

        Prompt::create([
            'title' => request('title'),
            'slug' => $slug,
            'active' => request('active')
        ]);
        return redirect('/admin/prompts');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Prompt  $prompt
     * @return \Illuminate\Http\Response
     */
    public function show(Prompt $prompt)
    {
        // dd($prompt);
        $posts = Post::where('prompt_id',$prompt->id)->get();
        return view('admin.prompts.show',compact('posts'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Prompt  $prompt
     * @return \Illuminate\Http\Response
     */
    public function edit(Prompt $prompt)
    {
         return view('admin.prompts.edit',compact('prompt'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Prompt  $prompt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prompt $prompt)
    {
        // $prompt->update(request()->validate(['title','active']));
        $prompt->update([
            'active' => request()->has('active')
        ]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Prompt  $prompt
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prompt $prompt)
    {
        $prompt->delete();
        return redirect('/admin/prompts');
    }

    public function showSingle($param)
    {
        // dd($prompt);
        $prompt = Prompt::where('slug',$param)->orWhere('id',$param)->firstOrFail();
        $posts = Post::where('prompt_id',$prompt->id)->get();
        $user = Auth::user();
        $total_plays = 0;
        $total_likes = 0;

        foreach($posts as $post) {
            $total_plays += $post->play_count;
            $total_likes += $post->likes->count();
        }
        return view('posts.index',compact('posts','user','prompt','total_plays','total_likes'));
    }
}
