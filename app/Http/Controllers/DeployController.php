<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DeployController extends Controller
{
    public function deploy(Request $request) 
    {

        $root_path = base_path();
        $old_path = getcwd();
        chdir('/var/www/swch');
        //make sure to make the shell file executeable first before running the shell_exec function
        $output = shell_exec('shell-script.sh');
        chdir($old_path);
        echo $output;
/*
    	$githubPayload = $request->getContent();
    	$githubHash = $request->header('X-Hub-Signature');
    	
    	$localToken = config('app.deploy_secret');
    	$localHash = 'sha1=' . hash_hmac('sha1', $githubPayload, $localToken, false);
    	
    	if (hash_equals($githubHash, $localHash)) {
    		$root_path = base_path();
            $old_path = getcwd();
            chdir('/var/www/swch');
            //make sure to make the shell file executeable first before running the shell_exec function
            $output = shell_exec('shell-script.sh');
            chdir($old_path);
            echo $output;
    		/*$process = new Process('cd ' . $root_path . '; ./deploy.sh');
    		$process->run(function ($type, $buffer) {
    			echo $buffer;
    		});*/
    	}*/
    }
}
