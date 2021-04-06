import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Todos from './pages/Todos'
import Products from './pages/Products'

const linkStyle = {
  fontFamily: 'sans-serif',
  margin: '4px',
  textDecoration: 'none',
  color: 'white',
  padding: '4px',
  backgroundColor: 'rgb(106, 65, 219)',
  borderRadius: '3px'
}

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/todos" style={linkStyle}>Todos</Link>
      <Link to="/products" style={linkStyle}>Products</Link>
      <Switch>
        <Route component={Products} path="/products" exact />
        <Route component={Todos} path="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
