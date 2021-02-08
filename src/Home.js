import React, { Component } from 'react';
import HsButton from './component/HsButton';
import ExpProps from "./demos/ExpProps";
export default function Home() {

    const red = () => {
        alert('work');
    }

    return (
        <div>
            <h1 onClick={red}> Welcome to React Demo </h1>
            <div className="mt-4">
                <h2 className="mb-3">Button Component</h2>
                <ExpProps names="this is props example" />
                <ExpProps names="It is Resusable component" />
                <HsButton shape="round" color="primary" size="20px" content="click here" />
            </div>
        </div> 
    );

}