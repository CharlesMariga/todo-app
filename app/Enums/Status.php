<?php

namespace App\Enums;

enum Status: string
{
    case PENDING = 'pending';
    case BACKLOG = 'backlog';
    case COMPLETE = 'complete';
}
