import React from 'react'

const Home = (props) => {
  return (
    <div>
        {
          localStorage.getItem('token') ? (
            <h1> Welcome User </h1>
          ) : (
            <h2> Login to use all the features</h2>
          )
        }
    </div>
  )
}

export default Home