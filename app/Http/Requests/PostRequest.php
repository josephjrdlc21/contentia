<?php

namespace App\Http\Requests;

use App\Http\Requests\RequestManager;

class PostRequest extends RequestManager
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

        $rules = [
            'image' => "required|mimes:png,jpg,jpeg|min:1|max:2048",
            'title' => "required|unique_name:{$id},post|max:80",
            'subtitle' => "required|max:100",
            'content' => "required",
            'category' => "required",
            'status' => "nullable",
        ];

        return $rules;
    }

    public function messages(): array
    {
        return [
            'required' => "Field is required.",
            'unique_name' => "Title is already taken.",
            'max' => "Character inputs is too long.",
            'image.min' => "The file must be at least 1 KB.",
            'image.max' => "The file may not be greater than 2 MB.",
        ];
    }
}
