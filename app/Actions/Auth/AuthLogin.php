<?php

namespace App\Actions\Auth;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class AuthLogin{
    private array $request = [];
    private ?string $guard;

    public function __construct(array $request = [],) {
        $this->request = $request;
        $this->guard = "web";
    }

    public function execute(): array {
        if(Auth::guard($this->guard)->attempt(['email' => Str::lower($this->request['email']), 'password' => $this->request['password']])){
            $account = Auth::guard($this->guard)->user();

            if(!$account->email_verified_at) {
                Auth::guard($this->guard)->logout();

                return [
                    'success' => false, 
                    'status'  => "failed", 
                    'message' => "Account is not verfied. Please contact the administrator."
                ];
            }

            if($account->status == "inactive") {
                Auth::guard($this->guard)->logout();

                return [
                    'success' => false, 
                    'status'  => "warning", 
                    'message' => "Account is inactive!"
                ];
            }

            $account->last_login_at = now();
            $account->save();

            event(new AuditTrailLoggedEvent(
                process: 'LOGIN_AUTHENTICATION',
                remarks: 'Logged in to the system.',
                type: 'USER_ACTION',
            ));

            return [
                'success' => true, 
                'status'  => "success", 
                'message' => "Welcome {$account->name}!"
            ];
        }

        return [
            'success' => false, 
            'status'  => "failed", 
            'message' => "Invalid account credentials."
        ];
    }
}