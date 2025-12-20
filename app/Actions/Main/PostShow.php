<?php

namespace App\Actions\Main;

use App\Models\Post;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostShow{
    private array $request = [];
    private ?int $id;

    public function __construct(array $request = [], ?int $id = null) {
        $this->request = $request;
        $this->id = $id;
    }

    public function execute(): array {
        $post = Post::with(['category', 'user'])->find($this->id);

        if(!$post){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        return [
            'success' => true,
            'post'    => $post,
        ];
    }
}