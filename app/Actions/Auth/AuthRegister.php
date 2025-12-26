<?php

namespace App\Actions\Auth;

use App\Models\User;

use App\Events\UserRegisterAccountEvent;

use Illuminate\Support\Str;

class AuthRegister{
    private array $request = [];

    public function __construct(array $request = [],) {
        $this->request = $request;
    }

    public function execute(): array {
        $user = User::where('email', Str::lower($this->request['email']))->first();
        $token = Str::random(60);
        $code = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        if ($user && $user->email_verified_at) {
            return [
                'success' => false,
                'status'  => 'error',
                'message' => 'This email is already registered and verified. Please log in instead.'
            ];
        }

        if ($user && !$user->email_verified_at){
            $user->token = $token;
            $user->code = $code;
            $user->code_expires_at = now()->addMinutes(5);
            $user->save();

            if(env('MAIL_SERVICE', false)){
                event(new UserRegisterAccountEvent($user));
            }

            return [
                'token' => $token,
                'success' => true,
                'status'  => 'info',
                'message' => 'This email is already registered but not yet verified. We’ve sent you a new OTP to complete your registration.'
            ];
        }

        $account = new User;
        $account->name = Str::title($this->request['name']);
        $account->email = Str::lower($this->request['email']);
        $account->role = "author";
        $account->status = "inactive";
        $account->password = bcrypt($this->request['password']);
        $account->token = $token;
        $account->code = $code;
        $account->code_expires_at = now()->addMinutes(5);
        $account->save();

        if(env('MAIL_SERVICE', false)){
            event(new UserRegisterAccountEvent($account));
        }

        return [
            'token' => $token,
            'success' => true,
            'status'  => 'success',
            'message' => 'Your account has been created. We’ve sent a one-time password (OTP) to your email to verify your account.'
        ];
    }
}