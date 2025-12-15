<?php

namespace App\Http\Controllers;

use App\Models\Category;

use App\Actions\Post\PostList;

use App\Http\Requests\PageRequest;
//use App\Http\Requests\PostRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class PostController extends Controller{
    protected array $data = [];
    protected ?int $per_page;

    public function __construct() {
        parent::__construct();
        $this->data['categories'] = Category::pluck('name', 'id')->toArray();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Post List";

        $action = new PostList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('posts/index', $this->data);
    }

    public function create(PageRequest $request): Response {
        $this->data['page_title'] = "Post Blog";

        return inertia('posts/create', $this->data);
    }
}