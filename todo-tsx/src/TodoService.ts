import { TodoTypes } from './todo';

const LOCAL_STORAGE_KEY = 'todos';

export const TodoService = {

    // FOR GET
    getTodos: (): TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todoStr ? JSON.parse(todoStr) : [];
    },

    // FOR ADD
    addTodos: (text: string): TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };
        const updatedTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        return newTodo;
    },

    //FOR APDATE
    updateTodo: (todo:TodoTypes): TodoTypes => {
        const todos = TodoService.getTodos();

         const updateTodos = todos.map((t) => (t.id === todo.id ? todo :t));
         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
         return todo;
    },

    //FOR DELETE

    
    deleteTodo: (id: number): void => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    }
};




