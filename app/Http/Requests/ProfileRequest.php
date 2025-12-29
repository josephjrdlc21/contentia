<?php

namespace App\Http\Requests;

use App\Http\Requests\RequestManager;

class ProfileRequest extends RequestManager
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->id ?? 0;

        $rules = [];

        switch ($this->route()->getName()) {
            case 'profile.update':
                $rules = [
                    'image' => "nullable|mimes:png,jpg,jpeg|min:1|max:2048",
                    'name' => 'required|max:40',
                    'email' => "required|email:rfc,dns|unique_email:{$id},user|max:40",
                ];

                break;

            case 'profile.update_password':
                $rules = [
                    'current_password' => "required|current_password:{$id}",
                    'password' => "required|confirmed|password_format|new_password:{$id}",
                ];

                break;
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'required' => "Field is required.",
            'email.email' => "Invalid email address.",
            'email.unique_email' => "Email address is already taken.",
            'max' => "Character inputs is too long.",
            'image.min' => "The file must be at least 1 KB.",
            'image.max' => "The file may not be greater than 2 MB.",
            'confirmed' => "Password mismatch.",
            'current_password.current_password' => 'The password is incorrect.',
            'password_format' => "Password must be atleast 8 characters long, should contain atleast 1 uppercase, 1 lowercase, 1 numeric and 1 special character.",
            'password.new_password' => "You are not allowed to use the same password.",
        ];
    }
}
