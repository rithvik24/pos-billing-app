import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import  { asyncGetUser } from '../../actions/userActions'
import StatsContainer from '../dashboard/StatsContainer'

const Home = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(asyncGetUser())
    }
  },[dispatch])

  const { user } = useSelector((state) => {
    return state
  })
  
  return (
    <>
        {
          localStorage.getItem('token') ? (
            <div>
              {
                user.data.username && (
                  <>
                    <h2>  Welcome {user.data.username[0].toUpperCase() + user.data.username.slice(1).toLowerCase()} </h2>
                    <StatsContainer/>
                  </>
                )
              }
            </div>
          ) : (
            <div>
              <h2> Login to use all the features</h2>
            </div>
          )
        }
    </>
  )
}

export default Home