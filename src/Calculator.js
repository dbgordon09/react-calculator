import React from 'react';
import Button from "./Button";

function Calculator() {
    const buttons = [
        new dataButton("clear-entry", "CE"),
        new dataButton("clear", "C"),
        new dataButton("backspace", "<-"),
        new dataButton("divide", "/"),
        new dataButton("seven", "7", "Number"),
        new dataButton("eight", "8", "Number"),
        new dataButton("nine", "9", "Number"),
        new dataButton("multiply", "x"),
        new dataButton("four", "4","Number"),
        new dataButton("five", "5", "Number"),
        new dataButton("six", "6", "Number"),
        new dataButton("minus", "-"),
        new dataButton("one", "1", "Number"),
        new dataButton("two", "2", "Number"),
        new dataButton("three", "3", "Number"),
        new dataButton("add", "+"),
        new dataButton("negate", "+/-"),
        new dataButton("zero", "0", "Number"),
        new dataButton("decimal-point", ","),
        new dataButton("equals", "="),


    ]
    return (
        <div className="container">
            <div className="row">
                <input className="Calc-input"/>
            </div>
            <div className="row">
                {buttons.map(button => {
                    return (
                        <div className={`Button col-3 p-3 ${button.styling}`}>
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
    constructor(key, text, styling ="") {
        this.key = key;
        this.text = text;
        this.styling = styling;
    }
}