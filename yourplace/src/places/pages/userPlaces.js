import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/placeList';
import MyImage from './1.jpg';

const DUMMY_PLACE = [
    {
        id: 'p1',
        imageUrl: MyImage,
        title: 'Merry Hill',
        description: 'it\'s a beautiful snowy   place ',
        address: '23 90 gps sd',
        creator: 'u1',
        location: {
            lat: 40.9489,
            lng: 24.009809
        }
    },
    {
        id: 'p1',
        imageUrl: MyImage,
        title: 'Merry Hill',
        description: 'it\'s a beautiful snowy   place ',
        address: '23 90 gps 12',
        creator: 'u1',
        location: {
            lat: 40.9489,
            lng: 24.009809
        }
    },
    {
        id: 'p2',
        imageUrl: MyImage,
        title: 'Jhon_sons',
        description: 'it\'s about this like  place ',
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u2',
        location: {
            lat: 40.9489,
            lng: 24.009809
        }
    }
]

const UserPlaces = props => {
    // useParams will get encoded url 
    const userId = useParams().userId;
    // it will filter the places on the basis of id's....
    const loadedPlaces = DUMMY_PLACE.filter(places => places.creator === userId);
    return <PlaceList  item={loadedPlaces}/>
}

export default UserPlaces;