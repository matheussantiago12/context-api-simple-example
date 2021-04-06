import React, { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { Container } from './styles'

const ProductForm = () => {
    const { dispatch } = useContext(ProductContext)
    const [product, setProduct] = useState({})

    const handleFormSubmit = e => {
        e.preventDefault()

        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }

    return (
        <Container>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    value={product?.title} 
                    onChange={e => setProduct({ ...product, title: e.target.value })} 
                    placeholder="Product title"
                />
                <input 
                    type="number" 
                    value={product?.price} 
                    onChange={e => setProduct({ ...product, price: e.target.value })} 
                    placeholder="Product price"
                />
                <button type="submit">Submit</button>
            </form>
        </Container>
    )
}

export default ProductForm
