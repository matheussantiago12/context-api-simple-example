import React, { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}
