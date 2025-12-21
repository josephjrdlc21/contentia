<?php

namespace App\Actions\Comment;

use App\Models\Comment;

use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class CommentList {
    private ?array $request = [];
    private ?int $per_page;

    public function __construct(array $request = [], ?int $per_page = null) {
        $this->request = $request;
        $this->per_page = $per_page;
    }

    public function execute(): array {
        $account = Auth::guard('web')->user();
        
        $record = Comment::with(['post'])->when($account && $account->role !== 'super_admin', function ($query) use ($account) {
           $query->where('user_id', $account->id);
        })
        ->when(count($this->request) > 0 && strlen($this->request['keyword'] ?? '') > 0, function ($query) {
            $query->whereRaw("LOWER(name) LIKE '%{$this->request['keyword']}%'");
        })
        ->latest()
        ->paginate($this->per_page);

        return ['record' => $record];
    }
}