import React from 'react';
import UserLists from '../components/userLists';
import mImage from './1.jpg';


const Users = () => {

    const USERS =[
        {
            id: 'u1',
            image: mImage,
            name: 'dreamer',
            places:3
         },
         {
            id: 'u2',
            image: mImage,
            name: 'dreamer Khan',
            places:1
         }
    ]

    return <div >
         <UserLists items={USERS}/>
    </div>
}

export default Users;