<?php

namespace App\Http\Controllers;

use App\Actions\AuditTrail\AuditTrailList;

use App\Http\Requests\PageRequest;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class AuditTrailController extends Controller{
    protected array $data = [];
    protected ?int $per_page;

    public function __construct() {
        parent::__construct();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request): Response {
        $this->data['page_title'] = "Audit Trail List";

        $action = new AuditTrailList($request->all(), $this->per_page);
        $result = $action->execute();

        $this->data['record'] = $result['record'];

        return inertia('audit-trails/index', $this->data);
    }
}