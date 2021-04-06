import React from 'react'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import { TodoProvider } from '../../contexts/TodoContext'
import { Container } from './styles'

const Todos = () => {
    return (
        <TodoProvider>
            <Container>
                <TodoForm />
                <TodoList />
            </Container>
        </TodoProvider>
    )
}

export default Todos
