import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);
    };

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button className="button" onClick={() => {
                props.onAdd(inputText);
                setInputText("");
            }} >
                <span>Add</span>
            </button>
        </div>
    );
};

export default InputArea;