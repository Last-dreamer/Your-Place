import React from 'react';
import './userLists.css';
import UserItem from './userItem';


const UserLists = props => {

    if(props.items.length === 0){

        return (
            <div className='center'>
                    <h1>No User are registered... ?</h1> 
            </div>
        );
    }

    return (
        <ul className='users-list'>
        {
            props.items.map(user => (
                <UserItem  
                id={user.id} 
                key={user.id} 
                name={user.name}
                placeCount={user.places} 
                image={user.image} />
            ))
        }
        </ul>
    );


}

export default UserLists;