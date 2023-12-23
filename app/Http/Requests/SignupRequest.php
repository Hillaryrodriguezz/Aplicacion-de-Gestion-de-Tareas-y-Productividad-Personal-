<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'last_name' => ['required', 'string'], // Asegúrate de que 'last_name' esté incluido en las reglas de validación
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                Password::min(5)
                    ->numbers()
            ],
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Asegúrate de que 'imagen_perfil' esté incluido en las reglas de validación
        ];
    }
}
