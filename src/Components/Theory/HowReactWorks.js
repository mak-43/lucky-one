import React from 'react';
import './Css.css'

const HowReactWorks = () => {
    return (
        <div className='theory'>
            <h1>How React Works</h1>
            <p >Basically React follow a tree.This tree is able to do efficient diff computations on the nodes.Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM.React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred</p>
        </div>
    );
};

export default HowReactWorks;