import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);

    if (!user) {
        return (
            <div className="bg-red-200 shadow rounded-lg p-1 my-5 mx-80">
            Please Login
            </div>
        )
    }

    return (
        <div className="bg-green-200 shadow rounded-lg p-1 my-5 mx-80">
        Welcome {user.username}
        </div>
    )
}

export default Profile
