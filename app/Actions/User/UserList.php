<?php

namespace App\Actions\User;

use App\Models\User;

use Carbon\Carbon;

class UserList{
    private ?array $request = [];
    private ?int $per_page;

    public function __construct(array $request = [], ?int $per_page = null) {
        $this->request = $request;
        $this->per_page = $per_page;
    }

    public function execute(): array {
        $record = User::when(count($this->request) > 0 && strlen($this->request['keyword'] ?? '') > 0, function ($query) {
            $query->whereRaw("LOWER(name) LIKE '%{$this->request['keyword']}%'")
                ->orWhereRaw("LOWER(email) LIKE '%{$this->request['keyword']}%'");
        })
        ->latest()->where('role', 'super_admin')->paginate($this->per_page);

        return ['record' => $record];
    }
}