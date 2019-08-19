<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/verify-notification',function() {
	$user = App\User::find(1);
	$verifyNotification = new Illuminate\Auth\Notifications\VerifyEmail();
	$mailMessage = $verifyNotification->toMail($user);
	$markdown = new Illuminate\Mail\Markdown(view(),config('mail.markdown'));
	return $markdown->render('vendor.notifications.email',$mailMessage->toArray());
});

Route::get('/test',function() {
	event(new App\Events\PostLiked('Someone'));
	return "Event has been sent!";
});




Route::get('/','HomeController@index', function () {
    return redirect()->intended('home');
});

Route::get('/welcome','HomeController@welcome');

Route::get('/notifications','PageController@notifications');
Route::get('/notifications/all-read','PageController@markAllRead');

Route::get('/contact','PageController@contact');
Route::post('/contact','PageController@contactSubmit');

Auth::routes(['verify'=>true]);

Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('/admin','AdminController@admin')
	->middleware('is_admin')
	->name('admin');

# Admin 
Route::resource('/admin/prompts','PromptController');
Route::resource('/admin/showcases','ShowcaseController');
Route::resource('/admin/faqs','FaqController');
Route::get('/faq','FaqController@faqPage');

# Search
Route::get('/search','SearchController@search');
// Route::get('/search/ajax','SearchController@search');

# Prompts
Route::get('/prompts/{param}','PromptController@showSingle');
// Route::get('/prompt/{param}','PromptController@showSingle');

# Suggestions
Route::group(['middleware' => ['auth']], function () { 
	Route::get('/suggestions','PromptSubmissionsController@create');
	Route::post('/suggestions','PromptSubmissionsController@store');
	Route::get('/delete-suggestion/{id}','PromptSubmissionsController@destroy');
});
Route::get('/suggestions/pick','PromptSubmissionsController@pick')
	->middleware('is_admin')
	->name('admin');

# Posts
Route::get('/play/{id}','PostsController@increasePlayCount');
Route::get('/next/{id}','PostsController@getNextSong');
Route::resource('/posts','PostsController')->middleware('verified');
Route::get('/post/like/{id}',['as' => 'post.like', 'uses' => 'LikeController@likePost']);

# RSVP
Route::get('/showcase/like/{id}',['as' => 'post.like', 'uses' => 'LikeController@likeShowcase']);
Route::get('/showcase/{id}','ShowcaseController@show');

# Comments 
Route::get('/posts/{post}/comments', 'CommentController@index');
Route::post('/posts/{post}/comments', 'CommentController@store');
// Route::middleware('auth:api')->group(function () {});
# Profile
// Route::resource('profile','ProfilesController',['only'=>['show','edit','update']]);
Route::get('/{username}','ProfilesController@show');
Route::get('/{username}/followers','ProfilesController@showFollowers');
Route::get('/{username}/edit','ProfilesController@edit');
Route::post('/update-profile/{username}','ProfilesController@update');
Route::get('/{username}/{param}','ProfilesController@showSinglePost');
Route::get('/{username}/{param}/comments','ProfilesController@showSinglePostWithComments');
Route::get('/user/like/{id}',['as' => 'user.like', 'uses' => 'LikeController@likeUser']);


Route::post('/deploy','DeployController@deploy');
