<?php

namespace App\Actions\Main;

use App\Models\Post;
use App\Models\Comment;

use Illuminate\Support\Facades\Auth;

class DashboardData {
    
    public function __construct() {
       
    }

    public function execute(): array { 
        $account = Auth::guard('web')->user();
        $is_author = $account->role === 'author';

        $latest_posts = Post::with(['category', 'user'])
            ->when($is_author, fn ($q) => $q->where('user_id', $account->id))
            ->latest()->take(10)->get();

        $total_posts = Post::when($is_author, fn ($q) => $q->where('user_id', $account->id))
            ->count();

        $total_comments = Comment::when($is_author, fn ($q) => $q->where('user_id', $account->id))
            ->count();

        $total_published = Post::where('status', 'published')->when($is_author, fn ($q) => $q->where('user_id', $account->id))
            ->count();

        $total_drafts = Post::where('status', 'draft')->when($is_author, fn ($q) => $q->where('user_id', $account->id))
            ->count();

        return ['record' => [
            'latest_posts' => $latest_posts,
            'total_posts' => $total_posts,
            'total_comments' => $total_comments,
            'total_published' => $total_published,
            'total_drafts' => $total_drafts
        ]];
    }
}