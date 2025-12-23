<?php

namespace App\Http\Controllers;

use App\Models\Category;

use App\Actions\Post\PostList;
use App\Actions\Post\PostCreate;
use App\Actions\Post\PostUpdateStatus;
use App\Actions\Post\PostDelete;

use App\Http\Requests\PageRequest;
use App\Http\Requests\PostRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class PostController extends Controller{
    protected array $data = [];
    protected ?int $per_page;

    public function __construct() {
        parent::__construct();
        $this->data['categories'] = Category::pluck('name', 'id')->toArray();
        $this->per_page = env("DEFAULT_PER_PAGE", 12);
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

    public function store(PostRequest $request): RedirectResponse {
        $action = new PostCreate($request->all());
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('posts.index') : redirect()->back();
    }

    public function update_status(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new PostUpdateStatus($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('posts.index') : redirect()->back();
    }

    public function destroy(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new PostDelete($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('posts.index') : redirect()->back();
    }
}