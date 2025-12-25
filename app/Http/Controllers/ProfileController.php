<?php

namespace App\Http\Controllers;

use App\Actions\Profile\ProfileUpdate;
use App\Actions\Profile\ProfileUpdatePassword;

use App\Http\Requests\PageRequest;
use App\Http\Requests\ProfileRequest;

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

    public function update(ProfileRequest $request,?int $id = null): RedirectResponse {
        $action = new ProfileUpdate($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('profile.index') : redirect()->back();
    }

    public function change_password(PageRequest $request): Response {
        $this->data['page_title'] = "Profile Change Password";

        return inertia('profile/change-password', $this->data);
    }

    public function update_password(ProfileRequest $request,?int $id = null): RedirectResponse {
        $action = new ProfileUpdatePassword($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('profile.change_password') : redirect()->back();
    }
}