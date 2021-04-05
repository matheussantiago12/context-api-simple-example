import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import { Container } from './styles'

const TodoList = () => {
    const { todos, toggleDone } = useContext(TodoContext)

    const sortById = (a, b) => {
        if (a.id < b.id) {
          return -1
        } else if (a.id > b.id) {
          return 1
        }

        return 0
    }

    return (
        <Container>
            {todos.sort(sortById).map(todo => (
                <div style={{ display: 'flex' }} className="todo-row" key={todo.id}>
                    <p><b>{todo.id}</b> - {todo.title} - {todo.done ? "Concluído" : "A fazer"}</p>
                    <button onClick={() => toggleDone(todo.id)}>{todo.done ? "Retomar" : "Concluir"}</button>
                </div>
            ))}
        </Container>
    )
}

export default TodoList
