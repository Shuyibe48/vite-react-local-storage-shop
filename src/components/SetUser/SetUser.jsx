import React from 'react';
import './SetUser.css'

const SetUser = (props) => {
    const {name, id, email} = props.user

    const userId = id => {
        console.log(id)
    }

    return (
        <div className='user'>
            <h4>Id: {id}</h4>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <button onClick={()=>userId(id)}>Save User</button>
        </div>
    );
};

export default SetUser;