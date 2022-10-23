import React from 'react'
import {useSelector } from 'react-redux'
import StatsContainer from '../dashboard/StatsContainer'

const Home = (props) => {
  const { user } = useSelector((state) => {
    return state
  })
  
  return (
    <>
        {
          localStorage.getItem('token') ? (
            <>
              {
                user.isLoading ? (
                  <>
                    <h1 style={{
                      padding : '300px 200px 200px 710px'
                    }}> Loading... </h1>
                  </>
                ) : (
                  <>
                    <StatsContainer/>
                  </>
                )
              }
            </>
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