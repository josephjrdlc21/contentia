<?php

namespace App\Actions\Post;

use App\Models\Post;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostUpdateStatus{
    private array $request = [];
    private ?int $id;

    public function __construct(array $request = [], ?int $id = null) {
        $this->request = $request;
        $this->id = $id;
    }

    public function execute(): array {
        $post = Post::find($this->id);

        if(!$post){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        DB::beginTransaction();
        try {
            $post->status = ($post->status == 'published') ? 'draft' : 'published';
            $post->save();

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
            'message' => "Blog status has been set to {$post->status}."
        ];
    }
}