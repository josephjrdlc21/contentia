<?php

namespace App\Actions\Auth;

use App\Models\User;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class AuthVerify{
    private array $request = [];
    private ?string $token;

    public function __construct(array $request = [], ?string $token = null) {
        $this->request = $request;
        $this->token = $token;
    }

    public function execute(): array {
        $user = User::where('token', $this->token)->where('code', $this->request['code'])->first();
        
        if(!$user) {
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Invalid token or code"
            ];
        }

        if($user && $user->code_expires_at->isPast()) {
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Code has already expired."
            ];
        }

        $user->code = null;
        $user->token = null;
        $user->code_expires_at = null;
        $user->status = "active";
        $user->email_verified_at = now();
        $user->save();

        Auth::guard('web')->login($user);

        return [
            'success' => true, 
            'status' => "success", 
            'message' => "Account has now successfully verified."
        ];
    }
}