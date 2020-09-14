import React from 'react';

import './placeList.css';
import Card from '../../shared/components/UiElements/Card'
import PlaceItem from './placeItem';

const PlaceList = props => {

    if(props.item.length === 0){
     return <div>
        <Card>
            <h2>No Places Found....!!</h2>
        </Card>
     </div>
    }


    return <ul className='place-list'>
        {props.item.map(place => {
            return <PlaceItem 
            key={place.id} 
            id={place.id} 
            image={place.imageUrl} 
            title={place.title} 
            description={place.description} 
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
            />
        })}
    </ul>
}

export default PlaceList;