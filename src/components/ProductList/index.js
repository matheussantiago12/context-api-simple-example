import React, { useContext } from 'react'
import { ProductContext, removeProduct } from '../../contexts/ProductContext'
import { Container } from './styles'

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext)
    const { products } = state

    const sortById = (a, b) => {
        if (a.id < b.id) {
          return -1
        } else if (a.id > b.id) {
          return 1
        }

        return 0
    }

    const handleProductRemove = id => {
        dispatch(removeProduct(id))
    }

    return (
        <Container>
            {products.sort(sortById).map(product => (
                <div style={{ display: 'flex' }} className="todo-row" key={product.id}>
                    <p><b>{product.id}</b> - {product.title} - $ {product.price}</p>
                    <button onClick={() => handleProductRemove(product.id)}>Remove</button>
                </div>
            ))}
        </Container>
    )
}

export default ProductList
