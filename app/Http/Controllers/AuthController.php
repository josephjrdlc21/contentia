<?php

namespace App\Http\Controllers;

use App\Actions\Auth\AuthLogin;
use App\Actions\Auth\AuthLogout;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class AuthController extends Controller{
    protected array $data = [];
    protected ?string $guard;

    public function __construct() {
        parent::__construct();
        $this->guard = "web";
    }

    public function login(PageRequest $request): Response {
        $this->data['page_title'] = "Login";

        return inertia('auth/login', $this->data);
    }

    public function authenticate(PageRequest $request): RedirectResponse {
        $action = new AuthLogin($request->all());
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('index') : redirect()->route('auth.login');
    }

    public function logout(PageRequest $request): RedirectResponse {
        $action = new AuthLogout();
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('auth.login') : redirect()->route('index');
    }
}