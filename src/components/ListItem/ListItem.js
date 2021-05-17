import React, { useState } from 'react';
import Item from './Item/Item';
import Amount from '../Amount/Amount';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import classes from './ListItem.module.css';

const items = [
    {
        id: 'e1',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'Bertie Yate',
        age: 29
    },
    {
        id: 'e2',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        name: 'Hester Hogan',
        age: 32
    },
    {
        id: 'e3',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        name: 'Larry Little',
        age: 36
    },
    {
        id: 'e4',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'Sean Walsh',
        age: 34
    }
];

const ListItem = () => {

    const [listItems, setListItems] = useState(items);
    const [eventsStatus, setEventsStatus] = useState(false)

    const clearHandler = () => {
        setListItems([]);
        setEventsStatus(true)
    }

    return (
        <main className={classes.main}>
            <Card>
                <Amount eventsNumber={listItems.length} />

                {listItems.length !== 0 && <ul className={classes.ul}>
                    {listItems.map(item => <Item key={item.id} name={item.name} age={item.age} img={item.img} />)}
                </ul>}

                {eventsStatus && <p style={{ textAlign: 'center' }}>There's no events for now.</p>}

                <Button onClick={clearHandler} length={listItems} name='Clear All' />
            </Card>
        </main>
    )
}

export default ListItem;