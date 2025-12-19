<?php

namespace App\Http\Controllers;

use App\Actions\Main\PostList;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class MainController extends Controller{
    protected array $data = [];
    protected array $request = [];
    protected ?string $guard;

    public function __construct() {
        parent::__construct();
        //$this->data['categories'] = Category::pluck('name', 'id')->toArray();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Dashboard";

        return inertia('welcome', $this->data);
    }

    public function home(PageRequest $request): Response {
        $this->data['page_title'] = "Home";

        $action = new PostList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('home', $this->data);
    }
}