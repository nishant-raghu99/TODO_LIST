import React from "react";

import Card from "./card";

import Button from "./button";

import classes from './ErrorModal.module.css';

const ErrorModal = props => {

    return (

        <div>
        <div className={classes.backdrop} onClick={props.onConfirm}/>
        <Card className={classes.modal}>
            <header className={classes.header}>

                <h3> {props.title}</h3>

            </header>

            <div className={classes.content}>
                <p>{props.message}</p>
            </div>

            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>ReSubmit</Button>
            </footer>
        </Card>

        </div>
    );
};

export default ErrorModal;