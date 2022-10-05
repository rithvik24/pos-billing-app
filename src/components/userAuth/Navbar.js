import React,{useState,useEffect} from 'react'
import { Link, Route, withRouter} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import { logoutUser } from '../../actions/userActions'
import CustomersContainer from '../customers/CustomersContainer'
import ProductsContainer from '../Products/ProductsContainer'

const Navbar = (props) => {
  const [ isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true)
    }
  },[])
  
  const handleAfterLogOut = () => {
    localStorage.removeItem('token')
    props.history.push('/')
    handleIsLoggedIn()
  }

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure?')
    if(confirmLogout){
      dispatch(logoutUser(handleAfterLogOut))
    }
  }

  const handleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  

  return (
    <div>
      <Link to = '/'> Home </Link>      
      {
        isLoggedIn ? (
          <>
            <Link to = '/account'> Account </Link>
            <Link to='/customers'> Customers </Link>
            <Link to='/products'> Products </Link>
            <Link to = {`${props.location.pathname}`} onClick={handleLogout}> Logout </Link>
          </>
        ) : (
          <>
            <Link to = '/register'> Register </Link>      
            <Link to = '/login'> Login </Link>      
          </>
        )
      }

      <Route path='/' component={Home} exact={true}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' render={ (props) => {
        return <Login {...props} handleIsLoggedIn = {handleIsLoggedIn}/>
      }}/>
      <Route path='/account' component={Account} exact={true}/>
      <Route path='/customers' component={CustomersContainer}/>
      <Route path='/products' component={ProductsContainer} />
    </div> 
  )
}

export default withRouter(Navbar)