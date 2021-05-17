import React, { Fragment } from 'react';
import classes from './Item.module.css';

const Item = props => {
    return (
        <Fragment>
            <li className={classes.li}>
                <span>
                    <img width='70px' height='70px' src={props.img} alt="" />
                </span>
                <span>
                    <span style={{fontWeight:'bold'}}>{props.name}</span>
                    <span>{props.age} years</span>
                </span>
            </li>
        </Fragment>
    )
}

export default Item;