<?php

namespace App\Listeners;

use App\Events\UserResetPasswordEvent;
use App\Notifications\UserResetPasswordNotification;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class UserResetPasswordListener implements ShouldQueue
{
    use InteractsWithQueue;
    /**
     * Handle the event.
     */
    public function handle(UserResetPasswordEvent $event)
    {
        Mail::to($event->user->email)->send(
            new UserResetPasswordNotification($event->user, $event->password, $event->link)
        );
    }
}