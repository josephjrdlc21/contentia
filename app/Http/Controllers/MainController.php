<?php

namespace App\Http\Controllers;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class MainController extends Controller{
    protected array $data = [];
    protected array $request = [];
    protected ?string $guard;

    public function __construct() {
        parent::__construct();
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Dashboard";

        return inertia('welcome', ['data' => $this->data]);
    }
}