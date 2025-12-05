<?php

namespace App\Http\Controllers;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class AuthController extends Controller{
    protected array $data = [];
    protected array $request = [];
    protected ?string $guard;

    public function __construct() {
        parent::__construct();
        $this->guard = "web";
    }

    public function login(PageRequest $request): Response {
        $this->data['page_title'] = "Login";

        return inertia('auth/login', ['data' => $this->data]);
    }
}