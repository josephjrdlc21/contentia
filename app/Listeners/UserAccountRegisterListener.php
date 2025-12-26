<?php

namespace App\Listeners;

use App\Events\UserRegisterAccountEvent;
use App\Notifications\UserRegisterAccountNotification;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class UserAccountRegisterListener implements ShouldQueue
{
    use InteractsWithQueue;
    /**
     * Handle the event.
     */
    public function handle(UserRegisterAccountEvent $event)
    {
        Mail::to($event->user->email)->send(
            new UserRegisterAccountNotification($event->user)
        );
    }
}