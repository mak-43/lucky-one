import React from 'react';
import './Css.css'

const PropsVsState = () => {
    return (
        <div className='theory'>
            <h1>Props VS State</h1>
            <p >State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. </p>
        </div>
    );
};

export default PropsVsState;