import { User } from "./User";
import { GroupedTodos, Todo } from "./todos";

export type PageProps = {
    todos: Todo[];
    groupedTodos: GroupedTodos;
    user: User;
};
