import React, {useState} from 'react';
import Button from "./Button";

const Calculator = () => {
    const buttons = [
        new dataButton("clear-entry", "CE" , ),
        new dataButton("clear", "C", () => setDisplay("")),
        new dataButton("backspace", "<-", (value) => value.slice(0, -1)),
        new dataButton("divide", "/"),
        new dataButton("seven", "7", () => setDisplay(`${display}7`), "Number"),
        new dataButton("eight", "8", value => `${value}8`, "Number"),
        new dataButton("nine", "9", value => `${value}9`, "Number"),
        new dataButton("multiply", "x", value => value),
        new dataButton("four", "4", value => `${value}4`, "Number"),
        new dataButton("five", "5", value => `${value}5`, "Number"),
        new dataButton("six", "6", value => `${value}6`, "Number"),
        new dataButton("minus", "-", value => value),
        new dataButton("one", "1", value => `${value}1`, "Number"),
        new dataButton("two", "2", value => `${value}2`, "Number"),
        new dataButton("three", "3", value => `${value}3`, "Number"),
        new dataButton("add", "+", value => value),
        new dataButton("negate", "+/-", value => value),
        new dataButton("zero", "0", value => `${value}0`, "Number"),
        new dataButton("decimal-point", ",", value => `${value},`),
        new dataButton("equals", "=", () => setAnswer('42'))
    ];

    const [answer, setAnswer] = useState(0);
    const [display, setDisplay] = useState('');

    const handleInput = (input) => {
        setDisplay(display + input)
    };

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
                        <div className={`Button col-3 p-3 ${button.styling}`} onClick={() => button.callback()}>
                            <Button buttonText={button.text} key={button.key}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Calculator;

class dataButton {
    constructor(key, text, callback = value => value, styling = "",) {
        this.key = key;
        this.text = text;
        this.callback = callback;
        this.styling = styling;
    }
}