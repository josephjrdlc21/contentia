<?php

namespace App\Http\Controllers;

use App\Actions\User\UserList;
use App\Actions\User\UserCreate;
use App\Actions\User\UserUpdate;
use App\Actions\User\UserUpdateStatus;
use App\Actions\User\UserUpdatePassword;
use App\Actions\User\UserDelete;

use App\Http\Requests\PageRequest;
use App\Http\Requests\UserRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class UserController extends Controller{
    protected array $data = [];
    protected ?int $per_page;

    public function __construct() {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "User List";

        $action = new UserList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('users/index', $this->data);
    }

    public function store(UserRequest $request): RedirectResponse {
        $action = new UserCreate($request->all());
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('users.index') : redirect()->back();
    }

    public function update(UserRequest $request,?int $id = null): RedirectResponse {
        $action = new UserUpdate($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('users.index') : redirect()->back();
    }

    public function update_status(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new UserUpdateStatus($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('users.index') : redirect()->back();
    }

    public function update_password(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new UserUpdatePassword($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('users.index') : redirect()->back();
    }

    public function destroy(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new UserDelete($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('users.index') : redirect()->back();
    }
}