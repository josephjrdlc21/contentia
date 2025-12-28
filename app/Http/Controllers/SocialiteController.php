<?php

namespace App\Http\Controllers;

use App\Http\Requests\PageRequest;

use App\Actions\Socialite\SocialiteCallback;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

use Laravel\Socialite\Socialite;

class SocialiteController extends Controller{
    protected array $data = [];

    public function __construct() {
        parent::__construct();
    }

    public function google_login(PageRequest $request) : RedirectResponse {

        return Socialite::driver('google')->redirect();
    }

    public function google_callback(PageRequest $request) : RedirectResponse {
        $google = Socialite::driver('google')->user();
        
        $action = new SocialiteCallback($google);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('index') : redirect()->route('auth.login');
    }
}