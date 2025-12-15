<?php

namespace App\Http\Controllers;

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
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Post List";

        $action = new PostList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('posts/index', $this->data);
    }
}