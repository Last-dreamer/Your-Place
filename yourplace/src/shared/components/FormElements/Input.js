import React, { useReducer, useEffect} from 'react';

import './Input.css';
import { validate } from '../utils/validators';


const inputReducer = (state, action) => {
 
  switch(action.type){

    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      }

      case 'TOUCH': 
      return {
        ...state,
        isTouched: true
      }

    default: return state; 
  }
}


const Input = props => {

   const [inputState, dispatch] = useReducer(inputReducer,
     {value: props.initialValue || '', isValid: props.initialValid || false});

   const changeHandler = event => {

    dispatch({type: 'CHANGE', val: event.target.value, validators:props.validators});

   }
   

const TouchHandler = () => {
  dispatch({
    type: 'TOUCH'
  });
}

// destructioring ...
const { id , onInput} = props;
const { value, isValid} = inputState;

useEffect(() => {
  onInput(id,value,isValid)
}, [id, value, isValid, onInput]);


    const element = props.elements === 'input' ? 
    (<input id={props.id} type={props.type} placeholder={props.placeholder} 
      onChange={changeHandler} value={inputState.value} onBlur={TouchHandler}/>) :

     (<textarea id={props.id} rows={props.rows || 3} 
      onChange={changeHandler} value={inputState.value} onBlur={TouchHandler} />);

   return <div className={`form-control ${!inputState.isValid && inputState.isTouched &&  'form-control--invalid'}`}>
     {/*  like normal html we use for &  in react we use htmlFor  */}
         <label htmlFor={props.id}>{props.label}</label>
         {element}
         {!inputState.isValid && inputState.isTouched &&  <p>{props.errorText}</p>}
        </div>
}

export default Input;