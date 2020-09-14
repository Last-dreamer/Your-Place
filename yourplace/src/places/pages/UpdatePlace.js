import React from 'react';
import { useParams } from 'react-router-dom';


import MyImage  from './1.jpg';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/components/utils/validators';
import './NewPlaces.css';
import { useForm } from '../../shared/components/hooks/form-hooks';


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
];


const UpdatePlace = ( ) => {

    const  placeId = useParams().placeId;

    const identifiedPlaces = DUMMY_PLACE.find(p => p.id === placeId);


    const [formState, inputHandler] = useForm({
        title: {
            value:identifiedPlaces.title,
            isValid: true
        },
        description: {
            value:identifiedPlaces.description,
            isValid: true
        },
        address: {
            value:identifiedPlaces.address,
            isValid: true
        }
    }, true);

    if(!identifiedPlaces){
        return (
        <div className='center'>
            <h2>Could Not Found A Place..</h2>
        </div>
        );
    }

    const placeSubmitUpdateHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return <form className='place-form' onSubmit={placeSubmitUpdateHandler}>
        <Input
        id='title' 
        element='input' 
        label='Title'
        type ='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid text'
        onInput ={inputHandler}
        initialValue={formState.inputs.title.value}
        initailValid={formState.inputs.title.isValid}
        />

        <Input
        id='description'  
        label='Description'
        type ='input'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description  like minimum 5 characters'
        onInput ={inputHandler}
        initialValue={formState.inputs.description.value}
        initailValid={formState.inputs.description.isValid}
        />

        <Input 
        id='address'
        element='input' 
        label='Address'
        type ='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid address'
        onInput ={inputHandler}
        initialValue={formState.inputs.address.value}
        initailValid={formState.inputs.address.isValid}
        />

        <Button disabled={!formState.isValid} type='submit'>Update Place</Button>

    </form>

}

export default UpdatePlace;