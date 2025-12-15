<?php

namespace App\Actions\Post;

use App\Models\Post;

use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class PostList {
    private ?array $request = [];
    private ?int $per_page;

    public function __construct(array $request = [], ?int $per_page = null) {
        $this->request = $request;
        $this->per_page = $per_page;
    }

    public function execute(): array {
        $account = Auth::guard('web')->user();
        
        $record = Post::with(['category', 'user'])->when($account && $account->status !== 'super_admin', function ($query) use ($account) {
            $query->where('user_id', $account->id);
        })
        ->when(count($this->request) > 0 && strlen($this->request['keyword'] ?? '') > 0, function ($query) {
            $query->whereRaw("LOWER(title) LIKE '%{$this->request['keyword']}%'");
        })
        ->latest()
        ->paginate($this->per_page);

        return ['record' => $record];
    }
}