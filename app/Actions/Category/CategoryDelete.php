<?php

namespace App\Actions\Category;

use App\Models\Category;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategoryDelete{
    private array $request = [];
    private ?int $id;

    public function __construct(array $request = [], ?int $id = null) {
        $this->request = $request;
        $this->id = $id;
    }

    public function execute(): array {
        $category = Category::find($this->id);

        if(!$category){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        DB::beginTransaction();
        try {
            $category->delete();

            event(new AuditTrailLoggedEvent(
                process: 'DELETE_CATEGORY',
                remarks: 'Delete category.',
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
            'message' => "Category has been deleted successfully."
        ];
    }
}