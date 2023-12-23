<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'last_name' => $this->last_name, // Asegúrate de que 'last_name' esté incluido en el array
            'email' => $this->email,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'image_path' => $this->image_path, // Asegúrate de que 'image_path' esté incluido en el array
        ];
    }
}
