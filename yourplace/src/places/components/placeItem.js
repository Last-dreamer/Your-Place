import React, {useState} from 'react';

import './placeItem.css';
import Card from '../../shared/components/UiElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Model from '../../shared/components/UiElements/Model';


const PlaceItem = props => {

    const [showMap, setShowMap] = useState(false);

    const [showConfirmModel, setShowConfirmModel] = useState(false); 

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);


    const showDeleteWarningHandler = () => {
        setShowConfirmModel(true);
    }

    const cancelDeleteHandler = () =>  { 
        setShowConfirmModel(false);
     } 

    const confirmDeleteHandler = () => {
        console.log('deleted....!')
    }


    return (
    <div>
        <Model show={showMap} onCancel={closeMapHandler}  header={props.address}
         contentClass='place-item__modal-content'
         footerClass='place-item__modal-actions'
         footer={<Button onClick={closeMapHandler}>Close</Button>}>
            <div className='map-container'>
                <p>The Map !!!!!!!!</p>
            {/* <Map center={props.coordinates} zoom={16} /> */}
            </div> 
        </Model>

        <Model show={showConfirmModel} onCancel={cancelDeleteHandler}
         header='Are You Sure Wanna delete This ...' 
          footerClass='place-item__model-actions'
          footer={
              <React.Fragment>
                  <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
                  <Button danger onClick={confirmDeleteHandler}>Delete</Button>
              </Reactq.Fragment>
          }  
          >
            <p> 
                if you delete it you are not gonna undone it ...
            </p>
        </Model>
    <li className='place-item'>
        <Card>
        <div className='place-item__image'>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className='place-item__info'>
           <h2>{props.title}</h2>
           <h2>{props.address}</h2>
           <h3>{props.description}</h3>
        </div>
        <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/place/${props.id}`}>EDIT</Button>
            <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
        </div>
        </Card>
    </li>
    </div>);
}

export default PlaceItem;