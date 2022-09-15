import React, {useEffect, useState} from 'react';



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


        // UseSTATE ------------------------------------>

         let [calc, setCalc] = useState({
                sign: "",
                num: 0,
                res: 0,
        });


        // MYCONSTANTS -------------------------------->

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


        const collectCount = (e) => {
            let secondNum = document.querySelector("#num1").innerHTML
            let sign = document.querySelector("#sign").innerHTML
            let firstNum = document.querySelector("#num2").innerHTML

            let compCalc = firstNum + ' ' + sign + ' ' + secondNum + ' = '

            let calcData = new FormData();

            calcData.append('calcSave', compCalc );

            fetch("http://localhost:8080/save.php", {
                method: 'POST',
                body: calcData,
                mode: 'cors',
                redirect: 'follow',
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
                    'Accept': 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
                }

            })
                .then(r => r.json())
                .then(d => {
                    console.log(d)
                })

        }


        const saveCalc = (e) => {
            let compCalc = document.querySelector("#myScreen").innerHTML
             console.log(compCalc)
        }

        // UseEFFECT ------------------------------------>


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
    const Reminder = {
        marginTop:"15vh",
        width: "15vh",
        textAlign: "center",
        border: "solid 1px white",
        fontSize: "2em",
        padding: "2.5vh",
        marginLeft:"4vh"

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

    const saveBtn = {
        textAlign: "center",
        width: "50vh",
        marginTop:"8vh",
        marginLeft:"4vh",
        marginRight:"4vh",
        color: "purple",
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
        padding: "2vh",
        fontSize: "3em",
        textAlign: "center",
        textShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "none"
    }


    const mainFlex = {
        display: "flex"
    }

    const remFlex = {
        display: "flex"
    }

    const colFlex = {
        flexDirection: "column"
    }

    let myNum;



     // RETURN    ----------------------->


        return (
            <div style={mainFlex}>

                <div>
                    <div style={mainWrapper}>
                        <div id="divvi" style={nineTh}>
                            <ItsOverNineThousand />
                        </div>
                        <div>
                            <TheTitle />
                        </div>
                        <div>
                             <BeautifulScreen numVal = {calc.num ? calc.num : calc.res} />
                                <div style={Container}>

                                    {
                                        btns.map( (sign,i) =>
                                            <span style={P1}>
                                            <GreatOperationButton key={i} className ="button-op" signVal={sign}
                                                                  onClick={ function(e){ signClickHandler(e); } }
                                            />
                                            </span>
                                        )
                                    }

                                   {
                                       digits.map( (btn,i) =>
                                           <span style={P1}>
                                               <AmazingNumberButton key={i} num={btn} className ="button" value={btn}
                                                                    onClick={ function(e){ numClickHandler(e); } }
                                               />
                                           </span>
                                       )
                                   }

                                    <button style ={ceBtn}
                                            onClick={ function(e){ resetClick(e); } }>
                                        CE
                                    </button>

                                    {
                                        equalSign.map( (eq,i) =>
                                            <MagnificientEqualButton key={i} className ="button-eq" equalSign={eq}
                                                                     onClick={ function(e){ equalClickHandler(e); collectCount(e); } }
                                            />
                                        )
                                    }


                                </div>
                        </div>

                    </div>


                </div>

                <div style={colFlex}>

                    <div style={remFlex}>
                        <h1 style={Reminder} id="num2"> {calc.res} </h1>
                        <h1 style={Reminder} id="sign"> {calc.sign} </h1>
                        <h1 style={Reminder} id="num1"> {calc.num} </h1>
                    </div>

                    <div>
                        <button type="submit" name="save" style ={saveBtn} onClick={function(e){ saveCalc( e );  } } >
                            SAVE
                        </button>
                    </div>

                </div>

            </div>

        )
}


export default Calculator;





















