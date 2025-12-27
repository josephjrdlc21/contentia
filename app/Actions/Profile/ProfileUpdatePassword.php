<?php

namespace App\Actions\Profile;

use App\Models\User;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Facades\DB;

class ProfileUpdatePassword{
    private array $request = [];
    private ?int $id;

    public function __construct(array $request = [], ?int $id = null) {
        $this->request = $request;
        $this->id = $id;
    }

    public function execute(): array {
        $profile = User::find($this->id);

        if(!$profile){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        DB::beginTransaction();
        try {
            $profile->password = bcrypt($this->request['password']);
            $profile->save();

            event(new AuditTrailLoggedEvent(
                process: 'UPDATE_PASSWORD_PROFILE',
                remarks: 'Update profile password.',
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
            'message' => "Profile password has been successfully updated."
        ];
    }
}