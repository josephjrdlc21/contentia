<?php

namespace App\Actions\User;

use App\Models\User;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserUpdate{
    private array $request = [];
    private ?int $id;

    public function __construct(array $request = [], ?int $id = null) {
        $this->request = $request;
        $this->id = $id;
    }

    public function execute(): array {
        $user = User::find($this->id);

        if(!$user){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        DB::beginTransaction();
        try {
            $user->name = Str::title($this->request['name']);
            $user->email = Str::lower($this->request['email']);
            $user->save();
            
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
            'message' => "User details has been successfully updated."
        ];
    }
}