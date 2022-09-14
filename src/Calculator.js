
import React, { useState } from 'react';
import './Calculator.css';


import TheTitle from './TheTitle';
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";


function Calculator() {

        const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const btns = ["+", "-", "/", "*"]
        const equalSign = ["="]


        let [calc, setCalc] = useState({
                sign: "",
                num: 0,
                res: 0,
        });

        const signClickHandler = (e) => {

            e.preventDefault();
            const signVal = e.target.innerHTML;
            console.log(calc)

            setCalc({
                ...calc,
                sign: signVal,
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0,
            });
        };


        const numClickHandler = (e) => {

            const numVal = e.target.innerHTML;

            setCalc({
                ...calc,
                num:
                    calc.num === 0 && numVal === "0"
                        ? "0"
                        : calc.num % 1 === 0 ?
                            parseInt(calc.num + numVal)
                            : calc.num + numVal,

                res: !calc.sign ? 0 : calc.res,
            });
        }

        const equalClickHandler = () => {
            if (calc.sign && calc.num) {
                const calculate = (a, b, sign) => {
                    if (sign === "+") {
                        return a + b;
                    } else if (sign === "-") {
                        return a - b;
                    } else if (sign === "*") {
                        return a * b;
                    } else if (sign === "/") {
                        return a / b;
                    }
                }

                setCalc({
                    ...calc,
                    res: calc.num === "0" && calc.sign === "/"
                            ? "Can't divide with 0"
                            :  calculate( parseInt(calc.res),  parseInt(calc.num),  calc.sign),
                    sign: "",
                    num: 0,
                });
            }
        };


        const resetClick = () => {
            setCalc({
                ...calc,
                sign: "",
                num: 0,
                res: 0,
            });
        };

        return (
            <div>
                <TheTitle />
                <BeautifulScreen numVal = {calc.num ? calc.num : calc.res} />

                        <div>
                            {
                                digits.map( (btn,i) =>
                                        <AmazingNumberButton key={i} num={btn} className ="button" value={btn}
                                                             onClick={ function(e){ numClickHandler(e);} }
                                        />
                                )
                            }
                        </div>

                        <div>
                            {
                                btns.map( (sign,i) =>
                                        <GreatOperationButton key={i} className ="button" signVal={sign}
                                                              onClick={ function(e){ signClickHandler(e);} }
                                        />
                                )
                            }
                        </div>

                        <div>
                            {
                                equalSign.map( (eq,i) =>
                                    <MagnificientEqualButton key={i} className ="equal" equalSign={eq}
                                                             onClick={ function(e){ equalClickHandler(e);} }
                                    />
                                )
                            }
                        </div>

                        <div>
                            <button className ="equal"
                                    onClick={ function(e){ resetClick(e);} }>
                            CE
                            </button>
                        </div>

            </div>
        )
}


export default Calculator;





















