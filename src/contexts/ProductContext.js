import React, { createContext, useReducer } from 'react'

export const ProductContext = createContext()

// Action constants
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const initialState = {
    products: [
        {
            id: 1,
            title: 'Keyboard',
            price: 14.95
        },
        {
            id: 2,
            title: 'Mouse',
            price: 10.95
        }
    ]
}

// Reducer
const reducer = (state = initialState, action) => {
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

// Action creators
export const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = id => {
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
} 

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}
