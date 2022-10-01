import React,{useState,useEffect} from 'react'
import { Link, Route, withRouter} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'

const Navbar = (props) => {
  const [ isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true)
    }
  },[])

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure?')
    if(confirmLogout){
      alert('successfully logged out')
      localStorage.removeItem('token')
      handleIsLoggedIn()
    }
  }

  const handleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  

  return (
    <div>
      <Link to='/'> Home </Link>      
      {
        isLoggedIn ? (
          <>
            <Link to='/account'> Account </Link>
            <Link to={`${props.location.pathname}`} onClick={handleLogout}> Logout </Link>
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
      <Route path='/account' component={Account}/>
    </div>
  )
}

export default withRouter(Navbar)