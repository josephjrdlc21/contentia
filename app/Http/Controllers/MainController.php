<?php

namespace App\Http\Controllers;

use App\Models\Category;

use App\Actions\Main\PostList;
use App\Actions\Main\PostShow;
use App\Actions\Main\CommentCreate;

use App\Http\Requests\PageRequest;
use App\Http\Requests\CommentRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class MainController extends Controller{
    protected array $data = [];
    protected array $request = [];
    protected ?string $guard;

    public function __construct() {
        parent::__construct();
        $this->data['categories'] = [0 => "All"] + Category::pluck('name', 'id')->toArray();
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

    public function show(PageRequest $request,?int $id = null): RedirectResponse|Response {
        $action = new PostShow($request->all(), $id);
        $result = $action->execute();

        if(!$result['success']) {
            session()->flash('notification-status', $result['status']);
            session()->flash('notification-msg', $result['message']);

            return redirect()->back();
        }

        $this->data['post'] = $result['post'];

        return inertia('blog', $this->data); 
    }

    public function comment_store(CommentRequest $request,?int $id = null): RedirectResponse {
        $action = new CommentCreate($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('show', [$id]) : redirect()->back();
    }
}