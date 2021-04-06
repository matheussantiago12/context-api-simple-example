import React, { useState, createContext } from 'react'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Learn React', done: true },
        { id: 2, title: 'Learn TypeScript', done: false }
    ])

    const createTodo = (todo) => {
        const newTodo = {
            id: todos.length + 1,
            title: todo.title,
            done: false
        }

        setTodos([...todos, newTodo])
    }

    const toggleDone = (id) => {
        const [todo] = todos.filter(t => t.id === id)
        const rest = todos.filter(t => t.id !== id)
        todo.done = !todo.done
        
        setTodos([...rest, todo])
    }

    return (
        <TodoContext.Provider value={{ todos, setTodos, createTodo, toggleDone }}>
            {children}
        </TodoContext.Provider>
    )
}
