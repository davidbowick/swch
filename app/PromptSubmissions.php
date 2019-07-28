<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PromptSubmissions extends Model
{
    protected $fillable = [
        'title','showcase_id','user_id'
    ];
}
