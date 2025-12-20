<?php

namespace App\Actions\Post;

use App\Models\Post;

use App\Support\ImageUploader;
use Mews\Purifier\Facades\Purifier;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class PostCreate{
    private array $request = [];

    public function __construct(array $request = []) {
        $this->request = $request;
    }

    public function execute(): array {
        $account = Auth::guard('web')->user();

        DB::beginTransaction();
        try {
            $post = new Post;
            $post->title = $this->request['title'];
            $post->subtitle = $this->request['subtitle'];
            $post->content = Purifier::clean($this->request['content']);
            $post->category_id = $this->request['category'];
            $post->user_id = $account->id;
            $post->status = $this->request['status'];
            $post->save();

            if($this->request['image']) {
                $image = ImageUploader::upload($this->request['image'], "uploads/posts/{$post->id}");
                $post->path = $image['path'];
                $post->directory = $image['directory'];
                $post->filename = $image['filename'];
                $post->source = $image['source'];
                $post->save();
            }
            
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
            'message' => "Post has been successfully created."
        ];
    }
}