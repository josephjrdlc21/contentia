<?php

namespace App\Http\Requests;

use App\Http\Requests\RequestManager;

class CategoryRequest extends RequestManager
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
            'name' => "required|unique_name:{$id},category|max:50",
        ];

        return $rules;
    }

    public function messages(): array
    {
        return [
            'required' => "Field is required.",
            'unique_name' => "Category is already taken.",
            'max' => "Character inputs is too long.",
        ];
    }
}
