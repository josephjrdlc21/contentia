<?php

namespace App\Http\Controllers;

use App\Actions\Author\AuthorList;
use App\Actions\Author\AuthorUpdateStatus;
use App\Actions\Author\AuthorUpdatePassword;
use App\Actions\Author\AuthorDelete;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class AuthorController extends Controller{
    protected array $data = [];
    protected ?int $per_page;

    public function __construct() {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Author List";

        $action = new AuthorList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('authors/index', $this->data);
    }

    public function update_status(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new AuthorUpdateStatus($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('authors.index') : redirect()->back();
    }

    public function update_password(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new AuthorUpdatePassword($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('authors.index') : redirect()->back();
    }

    public function destroy(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new AuthorDelete($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('authors.index') : redirect()->back();
    }
}