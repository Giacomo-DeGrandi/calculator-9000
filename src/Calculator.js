
import React, { useState } from 'react';

import TheTitle from './TheTitle';
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";


function Calculator() {

        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const btns = ["+", "-", "/", "*"]
        const equal = "="

        const [res, setScreen] = useState('');
        const [num, setNum] = useState('');

        function handleSetScreen(val){
                setScreen(val);
        }

        function seNum(num){
                console.log(num)
        }

        return (
            <div>
                <TheTitle />
                <BeautifulScreen screen = {res} />
                <AmazingNumberButton numbers = {number} onClick={ (e) => setNum(e.target.value) }  />
                <GreatOperationButton operator = {btns} />
                <MagnificientEqualButton myeq = {equal} />
            </div>
        )
}


export default Calculator;





















