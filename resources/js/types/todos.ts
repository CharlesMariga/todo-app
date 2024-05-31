import { Status } from "./Status";
import { Priority } from "./priority";

export interface Todo {
    id: number;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    created_at: string;
}

enum StateEnum {
    pending,
    complete,
    backlog,
}

export type GroupedTodos = {
    [key in keyof typeof StateEnum]: Todo[];
};

export type FilterObj = {
    title: string | undefined;
    status: string | undefined;
    priority: string | undefined;
};
