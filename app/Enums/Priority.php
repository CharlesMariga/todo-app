<?php

namespace App\Enums;

enum Priority: string
{
    case HIGHEST = 'highest';
    case HIGH = 'high';
    case MEDIUM = 'medium';
    case LOW = 'low';
    case LOWEST = 'lowest';
}
