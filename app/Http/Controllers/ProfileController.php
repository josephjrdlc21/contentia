<?php

namespace App\Http\Controllers;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class ProfileController extends Controller{
    protected array $data = [];
    protected array $request = [];

    public function __construct() {
        parent::__construct();
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Profile";

        return inertia('profile/index', $this->data);
    }
}