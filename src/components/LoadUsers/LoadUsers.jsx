import React from 'react';
import './LoadUsers.css'
import { useEffect, useState } from 'react'
import SetUser from '../SetUser/SetUser';

const LoadUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className='users'>
            {
                users.map(user => <SetUser user={user} key={user.id}></SetUser>)
            }
        </div>
    );
};

export default LoadUsers;