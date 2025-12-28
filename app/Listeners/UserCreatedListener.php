<?php

namespace App\Listeners;

use App\Events\UserCreatedEvent;
use App\Notifications\UserCreatedNotification;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class UserCreatedListener implements ShouldQueue
{
    use InteractsWithQueue;
    /**
     * Handle the event.
     */
    public function handle(UserCreatedEvent $event)
    {
        Mail::to($event->user->email)->send(
            new UserCreatedNotification($event->user, $event->password, $event->link)
        );
    }
}