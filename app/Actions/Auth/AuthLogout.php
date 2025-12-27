<?php

namespace App\Actions\Auth;

use App\Events\AuditTrailLoggedEvent;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class AuthLogout{
    private array $request = [];
    private ?string $guard;

    public function __construct(array $request = [],) {
        $this->request = $request;
        $this->guard = "web";
    }

    public function execute(): array {
        event(new AuditTrailLoggedEvent(
            process: 'LOGOUT_AUTHENTICATION',
            remarks: 'Logged out to the system.',
            type: 'USER_ACTION',
        ));

        Auth::guard($this->guard)->logout();

        return [
            'success' => true,
            'message' => "Logged out successfully.",
            'status'  => "success",
        ];
    }
}