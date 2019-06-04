import React from "react";

export default function Button(props) {
    return (
        <div className="button-inner">
            <h1>{props.buttonText}</h1>
        </div>
    )
};