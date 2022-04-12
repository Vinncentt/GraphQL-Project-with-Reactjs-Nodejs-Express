import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_USERS } from '../GraphQL/Queries'

export const GetUsers = () => {
    const { loading, error, data } = useQuery(LOAD_USERS);
    if (loading) return <p>Loading....</p>
    if (error) return <p>Error :(</p>
    return (
        
        <div>
            {data.getAllUsers.map(user => (
                <div key={user.id}>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}
