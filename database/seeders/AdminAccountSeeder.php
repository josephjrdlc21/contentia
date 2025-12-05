<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;

class AdminAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::where('email', 'admin@gmail.com')->first();

        if(!$admin) {
            $account = new User;
            $account->name = "Super User";
            $account->email = "admin@gmail.com";
            $account->email_verified_at = now();
            $account->role = "super_admin";
            $account->status = "active";
            $account->password = bcrypt("admin");
            $account->save();
        }
    }
}
