import React, {useState} from 'react';

//Defining an immutable list of operators
const operatorsEnum = Object.freeze({ADD: 1, SUBTRACT: 2, MULTIPLY: 3, DIVIDE: 4, EQUALS: 5});

//Hold the last used operator in memory
let lastOperator = operatorsEnum.ADD;

//Keep a reference to the last used items so that you can spam the equals
let memoryOperator = 0;

const Calculator = () => {
    const buttons = [
        new dataButton("clear-entry", "CE" , () => clearDisplay()),
        new dataButton("clear", "C", () => {clearDisplay(); setAnswer(0); lastOperator = operatorsEnum.ADD}),
        new dataButton("backspace", "<-", () => setDisplay(display.slice(0, -1))),
        new dataButton("divide", "/", () => {operate(operatorsEnum.DIVIDE)}),
        new dataButton("seven", "7", () => setDisplay(`${display}7`), "Number"),
        new dataButton("eight", "8", () => setDisplay(`${display}8`), "Number"),
        new dataButton("nine", "9", () => setDisplay(`${display}9`), "Number"),
        new dataButton("multiply", "x", () => {operate(operatorsEnum.MULTIPLY)}),
        new dataButton("four", "4", () => setDisplay(`${display}4`), "Number"),
        new dataButton("five", "5", () => setDisplay(`${display}5`), "Number"),
        new dataButton("six", "6", () => setDisplay(`${display}6`), "Number"),
        new dataButton("minus", "-", () => {operate(operatorsEnum.SUBTRACT)}),
        new dataButton("one", "1", () => setDisplay(`${display}1`), "Number"),
        new dataButton("two", "2", () => setDisplay(`${display}2`), "Number"),
        new dataButton("three", "3", () => setDisplay(`${display}3`), "Number"),
        new dataButton("add", "+", () => {operate(operatorsEnum.ADD)}),
        new dataButton("negate", "+/-", () => setDisplay(display[0] === '-' ? display.slice(1) : `-${display}`)),
        new dataButton("zero", "0", () => setDisplay(`${display}0`), "Number"),
        new dataButton("decimal-point", ".", () => { if(display.slice(-1) !== '.') setDisplay(display.length > 0 ? `${display}.` : `0.`)}),
        new dataButton("equals", "=", () => operate(operatorsEnum.EQUALS)),
        //When last operator is equals the next non equal operator must:
        //a) clear the display
        //b) set itself as the last operator
    ];

    //Helper functions
    const clearDisplay = () => {
        setDisplay('')
    };

    //Defining state
    const [answer, setAnswer] = useState(0);
    const [display, setDisplay] = useState('');

    //Operator functionality
    const operate = (operator) => {
        //Apply the last operator on the running total
        if (display.length > 0) {
            switch (lastOperator) {
                case operatorsEnum.ADD:
                    setAnswer(answer + parseFloat(display));
                    break;
                case operatorsEnum.SUBTRACT:
                    setAnswer(answer - parseFloat(display));
                    break;
                case operatorsEnum.MULTIPLY:
                    setAnswer(answer * parseFloat(display));
                    break;
                case operatorsEnum.DIVIDE:
                    setAnswer(answer / parseFloat(display));
                    break;
                case operatorsEnum.EQUALS:

                    break;
                default: {
                }
            }
            clearDisplay();
            lastOperator = operator;
        }
    };

    //Render Method
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <input className="Calc-input" value={display}/>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center" id="answer">
                    <h1>{answer}</h1>
                </div>
            </div>
            <div className="row">
                {buttons.map(button => {
                    return (
                        <div className={`Button col-3 p-3 ${button.styling}`} onClick={() => button.callback()}
                             key={button.key}>
                            <div className="button-inner">
                                <h1>{button.text}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Calculator;

class dataButton {
    constructor(key, text, callback = value => value, styling = "",) {
        this.key = key;
        this.text = text;
        this.callback = callback;
        this.styling = styling;
    }
}