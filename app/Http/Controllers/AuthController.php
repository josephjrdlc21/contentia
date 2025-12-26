<?php

namespace App\Http\Controllers;

use App\Models\User;

use App\Actions\Auth\AuthLogin;
use App\Actions\Auth\AuthLogout;
use App\Actions\Auth\AuthRegister;
use App\Actions\Auth\AuthVerify;

use App\Http\Requests\PageRequest;
use App\Http\Requests\AuthRequest;

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

    public function register(PageRequest $request): Response {
        $this->data['page_title'] = "Register";

        return inertia('auth/register', $this->data);
    }

    public function store(AuthRequest $request): RedirectResponse {
        $action = new AuthRegister($request->all());
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('auth.verify', $result['token']) : redirect()->back();
    }

    public function verify(PageRequest $request,?string $token = null): Response|RedirectResponse {
        $this->data['page_title'] = "Verify";

        $verify = User::where('token', $token)->first();

        if(!$verify) {
            return redirect()->route('auth.login');
        }

        return inertia('auth/verify', $this->data);
    }

    public function store_verify(PageRequest $request,?string $token = null): RedirectResponse {
        $action = new AuthVerify($request->all(), $token);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('index') : redirect()->back();
    }

    public function logout(PageRequest $request): RedirectResponse {
        $action = new AuthLogout();
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('auth.login') : redirect()->route('index');
    }
}