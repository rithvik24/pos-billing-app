import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetUser } from '../../actions/userActions'

const Account = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetUser())
    },[dispatch])

    const { user } = useSelector((state) => {
        return state
    })

    return (
    <div>
        {
            user.data.username && (
                <>
                    <h1> Owners Info </h1>
                    <h2> Name : {user.data.username}  </h2>
                    <h2> Business Name : {user.data.businessName}  </h2>
                </>
            )
        }
    </div>
  )
}

export default Account