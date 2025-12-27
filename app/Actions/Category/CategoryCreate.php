<?php

namespace App\Actions\Category;

use App\Models\Category;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategoryCreate{
    private array $request = [];

    public function __construct(array $request = []) {
        $this->request = $request;
    }

    public function execute(): array {
        DB::beginTransaction();
        try {
            $category = new Category;
            $category->name = Str::lower($this->request['name']);
            $category->save();

            event(new AuditTrailLoggedEvent(
                process: 'CREATE_CATEGORY',
                remarks: 'Create new category.',
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
            'message' => "New category has been successfully added."
        ];
    }
}