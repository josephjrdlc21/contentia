<?php

namespace App\Http\Controllers;

use App\Actions\Category\CategoryList;
use App\Actions\Category\CategoryCreate;
use App\Actions\Category\CategoryUpdate;
use App\Actions\Category\CategoryDelete;

use App\Http\Requests\PageRequest;
use App\Http\Requests\CategoryRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class CategoryController extends Controller{
    protected array $data = [];
    protected ?int $per_page;

    public function __construct() {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Category List";

        $action = new CategoryList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('categories/index', $this->data);
    }

    public function store(CategoryRequest $request): RedirectResponse {
        $action = new CategoryCreate($request->all());
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('categories.index') : redirect()->back();
    }

    public function update(CategoryRequest $request,?int $id = null): RedirectResponse {
        $action = new CategoryUpdate($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('categories.index') : redirect()->back();
    }

    public function destroy(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new CategoryDelete($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('categories.index') : redirect()->back();
    }
}