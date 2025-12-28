<?php

namespace App\Actions\Socialite;

use App\Models\User;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\User as SocialiteUser;

class SocialiteCallback{
    private SocialiteUser $request;

    public function __construct(SocialiteUser $request) {
        $this->request = $request;
    }

    public function execute(): array {
        $user = User::where('google_id', $this->request->getId())->first();

        if(!$user){
            $existing_user = User::where('email', $this->request->getEmail())->first();

            if($existing_user){
                $existing_user->google_id = $this->request->getId();
                $existing_user->save();

                Auth::guard('web')->login($existing_user);
                $account = Auth::guard('web')->user();

                event(new AuditTrailLoggedEvent(
                    process: 'LOGIN_AUTHENTICATION',
                    remarks: 'Logged in to the system google account.',
                    type: 'USER_ACTION',
                ));

                return [
                    'success' => true, 
                    'status'  => "success", 
                    'message' => "Welcome {$account->name}!"
                ];
            }

            $user = new User;
            $user->name = Str::title($this->request->getName());
            $user->email = $this->request->getEmail();
            $user->status = "active";
            $user->role = "author";
            $user->password = bcrypt(Str::random(8));
            $user->google_id = $this->request->getId();
            $user->save();

            Auth::guard('web')->login($user);
            $account = Auth::guard('web')->user();

            event(new AuditTrailLoggedEvent(
                process: 'LOGIN_AUTHENTICATION',
                remarks: 'Logged in to the system google account.',
                type: 'USER_ACTION',
            ));

            return [
                'success' => true, 
                'status'  => "success", 
                'message' => "Welcome, {$account->name}! Your account has been successfully created.",
            ];
        }

        Auth::guard('web')->login($user);
        $account = Auth::guard('web')->user();

        event(new AuditTrailLoggedEvent(
            process: 'LOGIN_AUTHENTICATION',
            remarks: 'Logged in to the system google account.',
            type: 'USER_ACTION',
        ));

        return [
            'success' => true, 
            'status'  => "success", 
            'message' => "Welcome {$account->name}!"
        ];
    }
}