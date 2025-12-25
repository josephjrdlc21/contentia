<?php

namespace App\Actions\Profile;

use App\Models\User;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Support\ImageUploader;

class ProfileUpdate{
    private array $request = [];
    private ?int $id;

    public function __construct(array $request = [], ?int $id = null) {
        $this->request = $request;
        $this->id = $id;
    }

    public function execute(): array {
        $profile = User::find($this->id);

        if(!$profile){
            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Record not found."
            ];
        }

        DB::beginTransaction();
        try {
            $profile->name = Str::title($this->request['name']);
            $profile->email = Str::lower($this->request['email']);
            $profile->save();

            if($this->request['image']) {
                $image = ImageUploader::upload($this->request['image'], "uploads/profile/{$profile->id}");
                
                $profile->path = $image['path'];
                $profile->directory = $image['directory'];
                $profile->filename = $image['filename'];
                $profile->source = $image['source'];
                $profile->save();
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            return [
                'success' => false, 
                'status' => "failed", 
                'message' => "Server Error: Code #{$e->getLine()}."
            ];
        }

        return [
            'success' => true, 
            'status'  => "success", 
            'message' => "Profile details has been successfully updated."
        ];
    }
}