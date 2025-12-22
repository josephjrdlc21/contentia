<?php

namespace App\Http\Controllers;

use App\Actions\Comment\CommentList;
use App\Actions\Comment\CommentDelete;
use App\Actions\Comment\CommentUpdateStatus;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class CommentController extends Controller{
    protected array $data = [];
    protected ?int $per_page;

    public function __construct() {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Comment List";

        $action = new CommentList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('comments/index', $this->data);
    }

    public function update_status(PageRequest $request,?int $id = null, ?string $status = null): RedirectResponse {
        $action = new CommentUpdateStatus($request->all(), $id, $status);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('comments.index') : redirect()->back();
    }

    public function destroy(PageRequest $request,?int $id = null): RedirectResponse {
        $action = new CommentDelete($request->all(), $id);
        $result = $action->execute();

        session()->flash('notification-status', $result['status']);
        session()->flash('notification-msg', $result['message']);

        return $result['success'] ? redirect()->route('comments.index') : redirect()->back();
    }
}
