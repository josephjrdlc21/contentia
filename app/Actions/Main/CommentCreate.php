<?php

namespace App\Actions\Main;

use App\Models\Comment;
use App\Models\Post;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CommentCreate{
    private array $request = [];
    private ?int $post_id;

    public function __construct(array $request = [], ?int $post_id = null) {
        $this->request = $request;
        $this->post_id = $post_id;
    }

    public function execute(): array {
        $post = Post::find($this->post_id);

        if(!$post){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        DB::beginTransaction();
        try {
            $comment = new Comment;
            $comment->post_id = $post->id;
            $comment->user_id = $post->user_id;
            $comment->name = Str::lower($this->request['name']);
            $comment->content = $this->request['content'];
            $comment->save();
            
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Server Error: Code #{$e->getLine()}."
            ];
        }

        return [
            'success' => true, 
            'status'  => "success", 
            'message' => "Your comment has been posted and waiting for approval."
        ];
    }
}

    