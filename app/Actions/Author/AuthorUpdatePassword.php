<?php

namespace App\Actions\Author;

use App\Models\User;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AuthorUpdatePassword{
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
            $password = Str::random(8);

            $user->password = bcrypt($password);
            $user->save();

            event(new AuditTrailLoggedEvent(
                process: 'UPDATE_PASSWORD_AUTHOR',
                remarks: 'Update author password.',
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
            'message' => "Author password has been reset. New password was sent to email."
        ];
    }
}