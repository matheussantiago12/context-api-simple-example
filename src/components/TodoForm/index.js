import React, { useContext, useState } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import { Container } from './styles'

const TodoForm = () => {
    const { createTodo } = useContext(TodoContext)

    const [todo, setTodo] = useState({})

    const handleFormSubmit = e => {
        e.preventDefault()
        createTodo(todo)
    }

    return (
        <Container>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    value={todo?.title} 
                    onChange={e => setTodo({ ...todo, title: e.target.value })} 
                    placeholder="Título da tarefa"
                />
                <button type="submit">Enviar</button>
            </form>
        </Container>
    )
}

export default TodoForm
