import React from 'react'
import { Link, Route} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'

const Navbar = (props) => {
  return (
    <div>
      <Link to='/'> Home </Link>      
      <Link to='/register'> Register </Link>      
      <Link to='/login'> Login </Link>      

      <Route path='/' component={Home} exact={true}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
    </div>
  )
}

export default Navbar