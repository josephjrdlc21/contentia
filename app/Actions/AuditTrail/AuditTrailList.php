<?php

namespace App\Actions\AuditTrail;

use App\Models\AuditTrail;

use Carbon\Carbon;

class AuditTrailList {
    private ?array $request = [];
    private ?int $per_page;

    public function __construct(array $request = [], ?int $per_page = null) {
        $this->request = $request;
        $this->per_page = $per_page;
    }

    public function execute(): array {
        $record = AuditTrail::with('user')->when(count($this->request) > 0 && strlen($this->request['keyword'] ?? '') > 0, function ($query) {
            $query->whereRaw("LOWER(remarks) LIKE '%{$this->request['keyword']}%'");
        })
        ->latest()
        ->paginate($this->per_page);

        return ['record' => $record];
    }
}