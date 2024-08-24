import React, {useState }from 'react'
import { TodoTypes } from '../todo'
import { TodoService } from '../TodoService'

export const TodoList = () => {
    const [todos, setTodos] =useState<TodoTypes[]>(TodoService.getTodos());
    const [editingTodoId, setEdidedTodoId] = useState<number | null> (null);
    const [editedTodoText, setEditedTodoText] = useState<string>("");


    const handleEditStart =(id:number, text:string) => {
        setEdidedTodoId(id);
        setEditedTodoText(text);
    }
    const handleEditCancel = () => {
        setEdidedTodoId(null);
        setEditedTodoText("");
    }
    const handleEditSave = (id:number) => {
        if(editedTodoText.trim() !== ''){
            const updateTodo = TodoService.updateTodo({
                id,
                text:editedTodoText,
                completed:false
            });

            setTodos((prevTodos) => prevTodos.map((todo)=> (todo.id === id ? updateTodo : todo))
        );
        setEdidedTodoId(null);
        setEditedTodoText("");
        }
    };
    

  return (
    <div>
      
    </div>
  )
}


