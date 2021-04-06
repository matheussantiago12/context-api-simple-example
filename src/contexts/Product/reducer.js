import { ADD_PRODUCT, REMOVE_PRODUCT } from './constants'

export const initialState = {
    products: [
        {
            id: 1,
            title: 'Keyboard',
            price: 14.90
        },
        {
            id: 2,
            title: 'Mouse',
            price: 10.90
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                products: [
                    ...state.products, 
                    { 
                        id: state.products.length + 1, 
                        ...action.payload 
                    }
                ]
            }
        case REMOVE_PRODUCT:
            return {
                products: 
                    state.products.filter(product => product.id !== action.payload)
            }
        default:
            throw new Error()
    }
}
