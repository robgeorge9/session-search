import React from 'react';
import './Output.css';
import List from '../List/List';

const Output = (props) => {
    return (
        <div className='mt2 section sql'>
            <List {...props} />
        </div>
    );
}


export default Output;