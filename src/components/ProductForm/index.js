import React, { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/Product/context'
import { Container } from './styles'
import { addProduct } from '../../contexts/Product/actions'

const ProductForm = () => {
    const { dispatch } = useContext(ProductContext)
    const [product, setProduct] = useState({})

    const handleFormSubmit = e => {
        e.preventDefault()

        dispatch(addProduct(product))
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
