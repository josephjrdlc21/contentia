<?php

namespace App\Listeners;

use App\Events\AuditTrailLoggedEvent;
use App\Models\AuditTrail;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;

use Exception;

class AuditTrailSaveListener
{
    public function handle(AuditTrailLoggedEvent $event): void
    {
        $ip = Request::header('X-Forwarded-For') ?? Request::getClientIp();
        $user = Auth::guard('web')->user();
        $user_name = $user?->name ?? 'System';

        DB::beginTransaction();
        try {
            $audit_trail = new AuditTrail;
            $audit_trail->user_id = $user->id ?? null;
            $audit_trail->process = $event->process;
            $audit_trail->ip = $ip;
            $audit_trail->remarks = "{$user_name} {$event->remarks}";
            $audit_trail->type = $event->type;
            $audit_trail->save();
            
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            throw new Exception($e->getLine());
        }
    }
}
