import './AmazingNumberButton.css';
import './TheTitle.css';
import React, { useState } from 'react';


function Number(props) {

    const num = props.numbers;

    const digits = num.map((props) =>
        <button name={props} key={props} value={props} className="button">{props}</button>
    );

    return (
        digits
    )
}



function AmazingNumberButton(props) {


        return (
           <div className="d-Flex">
                <div className="myButtons">
                   <Number {...props} />
                </div>
           </div>
       )
}

export default AmazingNumberButton;
