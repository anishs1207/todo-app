import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false })
        setTodo("");
    }
    return (
        <form onSubmit={add} className='flex'>
            <input
                type="text"
                placeholder='Write Todos..'
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
            />
            <button type='submit'
                className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>
                Add
            </button>
        </form>
    )
}

export default TodoForm