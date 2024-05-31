<?php

namespace Database\Factories;

use App\Enums\Priority;
use App\Enums\Status;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todo>
 */
class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'description' => fake()->sentences(4, true),
            'status' => fake()->randomElement([Status::BACKLOG->value, Status::COMPLETE->value, Status::PENDING->value]),
            'priority' => fake()->randomElement([Priority::HIGH->value, Priority::HIGHEST->value, Priority::LOW->value, Priority::LOWEST->value, Priority::MEDIUM->value]),
            'user_id' => 1
        ];
    }
}
