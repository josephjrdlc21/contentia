<?php

namespace App\Actions\Comment;

use App\Models\Comment;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CommentUpdateStatus{
    private array $request = [];
    private ?int $id;
    private ?string $status;

    public function __construct(array $request = [], ?int $id = null, ?string $status = null) {
        $this->request = $request;
        $this->id = $id;
        $this->status = $status;
    }

    public function execute(): array {
        $comment = Comment::find($this->id);

        if(!$comment){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        DB::beginTransaction();
        try {
            $comment->status = $this->status;
            $comment->save();

            event(new AuditTrailLoggedEvent(
                process: 'UPDATE_STATUS_COMMENT',
                remarks: 'Update status commment.',
                type: 'USER_ACTION',
            ));

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
            'message' => "Comment status has been set to {$comment->status}."
        ];
    }
}