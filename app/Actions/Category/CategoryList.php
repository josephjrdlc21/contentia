<?php

namespace App\Actions\Category;

use App\Models\Category;

use Carbon\Carbon;

class CategoryList {
    private ?array $request = [];
    private ?int $per_page;

    public function __construct(array $request = [], ?int $per_page = null) {
        $this->request = $request;
        $this->per_page = $per_page;
    }

    public function execute(): array {
        $record = Category::when(count($this->request) > 0 && strlen($this->request['keyword'] ?? '') > 0, function ($query) {
            $query->whereRaw("LOWER(name) LIKE '%{$this->request['keyword']}%'");
        })
        ->latest()
        ->paginate($this->per_page);

        return ['record' => $record];
    }
}