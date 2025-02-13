import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {

    const {userid} = useParams()
    return (
        <div>
            <h1>
                Your ID: {userid}
            </h1>
        </div>
    )
}

export default Users