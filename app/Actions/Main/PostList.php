<?php

namespace App\Actions\Main;

use App\Models\Post;

use Carbon\Carbon;

class PostList {
    private ?array $request = [];
    private ?int $per_page;

    public function __construct(array $request = [], ?int $per_page = null) {
        $this->request = $request;
        $this->per_page = $per_page;
    }

    public function execute(): array {        
        $record = Post::with(['category', 'user'])->when(count($this->request) > 0 && strlen($this->request['keyword'] ?? '') > 0, function ($query) {
            $query->whereRaw("LOWER(title) LIKE '%{$this->request['keyword']}%'");
        })
        ->where('status', 'published')
        ->latest()->paginate($this->per_page);

        return ['record' => $record];
    }
}