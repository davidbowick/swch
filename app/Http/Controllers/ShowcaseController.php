<?php

namespace App\Http\Controllers;

use App\Showcase;
use App\Like;
use App\User;
use App\DateTime;
use Illuminate\Http\Request;

class ShowcaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $showcases = Showcase::all()->orderBy('id', 'desc');
        $showcases = Showcase::orderBy('id','desc')->get();
        return view('admin.showcases.index',compact('showcases'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.showcases.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Showcase::create(
            request()->validate([
                'venue' => 'required|min:3|max:255',
                'date_time' => 'required|date',
                'address' => 'required'
            ])
        );
        return redirect('/admin/showcases');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Showcase  $showcase
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // dd($showcase);
        $showcase = Showcase::where('id', $id)->firstOrFail();
        $users_attending = Like::where('likeable_id',$showcase->id)->where('likeable_type','App\Showcase')->get();
        // dd($users_attending);
        return view('showcase.show',compact('showcase','users_attending'));
    }

    public function showSingle(Showcase $showcase)
    {
        // dd($showcase);
        $showcases = Showcase::all();
        return view('showcase.show',compact('showcase'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Showcase  $showcase
     * @return \Illuminate\Http\Response
     */
    public function edit(Showcase $showcase)
    {
        return view('admin.showcases.edit',compact('showcase'));   
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Showcase  $showcase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Showcase $showcase)
    {
        $showcase->update(request(['venue','address','date_time']));
        $showcase->update([
            'active' => request()->has('active')
        ]);
        return redirect('/admin/showcases');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Showcase  $showcase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Showcase $showcase)
    {
        $showcase->delete();
        return redirect('/admin/showcases');
    }
}
