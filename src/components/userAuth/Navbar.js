import React,{useState,useEffect} from 'react'
import { Link, Route} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'

const Navbar = (props) => {
  const [ isLoggedIn, setIsLoggedIn] = useState(false)

  const handleIsLoggedIn = () => {
    setIsLoggedIn(true)
  }
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(!isLoggedIn)
    }
  },[])

  return (
    <div>
      <Link to='/'> Home </Link>      
      {
        isLoggedIn ? (
          <>
            <Link to='/account'> Account </Link>
            <Link to='/logout'> Logout </Link>
          </>
        ) : (
          <>
            <Link to='/register'> Register </Link>      
            <Link to='/login'> Login </Link>      
          </>
        )
      }

      <Route path='/' component={Home} exact={true}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' render={ (props) => {
        return <Login {...props} handleIsLoggedIn = {handleIsLoggedIn}/>
      }}/>
    </div>
  )
}

export default Navbar