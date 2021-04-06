import React from 'react'
import ProductForm from '../../components/ProductForm'
import ProductList from '../../components/ProductList'
import { ProductProvider } from '../../contexts/ProductContext'
import { Container } from './styles'

const Todos = () => {
    return (
        <ProductProvider>
            <Container>
                <ProductForm />
                <ProductList />
            </Container>
        </ProductProvider>
    )
}

export default Todos
