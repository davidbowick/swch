<?php

namespace App\Http\Controllers;

use App\PromptSubmissions;
use Illuminate\Http\Request;
use App\Showcase;
use App\User;
use Auth;

class PromptSubmissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function pick()
    {
        $showcase = Showcase::where('active',1)->firstOrFail();
        if(Auth::user() and $showcase) {
            $allSubmissions = PromptSubmissions::where('showcase_id',$showcase->id)->get(); 
            $submissionPicks = PromptSubmissions::where('showcase_id',$showcase->id)->inRandomOrder()->take(2)->get(); 
        // User::inRandomOrder()->get();
        // return 
            return response()->json([
                'picks' => $submissionPicks,
                'all' => $allSubmissions,
            ]);
        // dd($submissionPicks->toArray());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $showcase = Showcase::where('active',1)->firstOrFail();
        if(Auth::user()) {
            $userSubmissions = PromptSubmissions::where('user_id',Auth::user()->id)->where('showcase_id',$showcase->id)->get(); 
        }
        return view('suggestions.create',compact('showcase','userSubmissions'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        PromptSubmissions::create(
            request()->validate([
                'title' => 'required|min:3|max:255',
                'showcase_id' => 'required',
                'user_id' => 'required'
            ])
        );
        // return $request;
        return redirect()->back();

        // return view('suggestions.create', compact('showcase','userSubmissions'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PromptSubmissions  $promptSubmissions
     * @return \Illuminate\Http\Response
     */
    public function show(PromptSubmissions $promptSubmissions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PromptSubmissions  $promptSubmissions
     * @return \Illuminate\Http\Response
     */
    public function edit(PromptSubmissions $promptSubmissions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PromptSubmissions  $promptSubmissions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PromptSubmissions $promptSubmissions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PromptSubmissions  $promptSubmissions
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        PromptSubmissions::find($id)->delete($id);
        return redirect('/suggestions');
    }
}
