import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Model.css';
import Backdrop from './Backdrop';

const ModelOverlay = props => {

    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
               <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>

            </form>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('model-hooks'));
}

const Model = props => {
    return (
        <div>
            { props.show && <Backdrop onClick={props.onCancel}/>}
            <CSSTransition in={props.show} mouseOnEnter unmountOnExit timeout={300} classNames='model '>
                <ModelOverlay  {...props}/>
            </CSSTransition>
        </div>
    );
}

export default Model;