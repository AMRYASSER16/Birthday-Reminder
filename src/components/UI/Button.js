import classes from './Button.module.css';
import React, { Fragment } from 'react';

const Button = props => {
    return(
        <Fragment>
            <button className={classes.button} onClick={props.onClick}>{props.name}</button>
        </Fragment>
    )
};

export default Button;