import React, { Fragment } from 'react';
import classes from './Amount.module.css';

const Amount = props => {
    return(
        <Fragment>
            <h3 className={classes.span}> {props.eventsNumber} birthday events</h3>
        </Fragment>
    )
}

export default Amount;