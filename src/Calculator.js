
import React, { useState } from 'react';

import TheTitle from './TheTitle';
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";


function Calculator() {

        const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const btns = ["+", "-", "/", "*"]
        const equal = "="

        let [calc, setCalc] = useState({
            sign: "",
            num: 0,
            res: 0,
        });

        const numClickHandler = (e) => {
            const numVal = e.target.innerHTML;
        }

        return (
            <div>
                <TheTitle />
                <BeautifulScreen screen = {calc.num ? calc.num : calc.res} />
                    <div>{
                            digits.map((btn,i) =>
                                    <AmazingNumberButton key={i} num={btn} className ="button" value={btn}
                                                         onClick={numClickHandler}
                                    />
                            )
                    }
                    </div>
                <GreatOperationButton operator = {btns} />
                <MagnificientEqualButton myeq = {equal} />
            </div>
        )
}


export default Calculator;





















