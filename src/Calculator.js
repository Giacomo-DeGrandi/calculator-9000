
import React, { useState, useEffect } from 'react';


import TheTitle from './TheTitle';
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";

import ItsOverNineThousand from "./ItsOverNineThousand";


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


        useEffect(() => {
            if (calc.res) {
                if(parseInt(calc.res) > 9000){
                    document.querySelector("#divvi").style.display = "block"
                }
            } else {
                if(parseInt(calc.res) < 9000){
                    document.querySelector("#divvi").style.display = "none"
                }
            }
        });


    // CSS    ----------------------->


    const Container = {
        textAlign: "center",
        width: "70vh",
        padding: "1vh",
        maxHeight: "90vh",
        margin: "2vh auto",
        borderRadius : "10vh",
        backgroundColor: "#F6F6F6",
        wrap: "wrap",
        boxShadow: "rgba(100, 100, 111, 0.2) 0 7px 29px 0"

    }

    const P1 = {
        padding: "2vh"
    }

    const P2 = {
        padding: "2.5vh"
    }

    const ceBtn = {
        textAlign: "center",
        width: "18vh",
        marginTop:"1vh",
        marginRight:"1vh",
        color: "#FF312E",
        padding: "4vh",
        fontSize: "2em",
        border: "solid 1px white",
        borderRadius: "5vh",
        backgroundColor:" white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0 7px 29px 0"
    }



    const mainWrapper = {
            width: "80vh",
            maxHeight: "180vh",
            margin: "10vh auto",
            borderRadius : "10vh",
            backgroundColor: "#EAE9EC",
            wrap: "wrap",
            boxShadow: "rgba(100, 100, 111, 0.2) 0 7px 29px 0"

    }

    const nineTh = {
        color: "#FF312E",
        fontSize: "4em",
        textAlign: "center",
        textShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "none"
    }


     // RETURN    ----------------------->


        return (
            <div style={mainWrapper}>
                <div id="divvi" style={nineTh}>
                    <ItsOverNineThousand />
                </div>
                <div>
                    <TheTitle />
                     <BeautifulScreen numVal = {calc.num ? calc.num : calc.res} />
                        <div style={Container}>

                            {
                                btns.map( (sign,i) =>
                                    <span style={P1}>
                                    <GreatOperationButton key={i} className ="button-op" signVal={sign}
                                                          onClick={ function(e){ signClickHandler(e);} }
                                    />
                                    </span>
                                )
                            }

                           {
                               digits.map( (btn,i) =>
                                   <span style={P1}>
                                       <AmazingNumberButton key={i} num={btn} className ="button" value={btn}
                                                            onClick={ function(e){ numClickHandler(e);} }
                                       />
                                   </span>
                               )
                           }

                            <button style ={ceBtn}
                                    onClick={ function(e){ resetClick(e);} }>
                                CE
                            </button>

                            {
                                equalSign.map( (eq,i) =>
                                    <MagnificientEqualButton key={i} className ="button-eq" equalSign={eq}
                                                             onClick={ function(e){ equalClickHandler(e);} }
                                    />
                                )
                            }


                        </div>
                </div>

            </div>
        )
}


export default Calculator;





















