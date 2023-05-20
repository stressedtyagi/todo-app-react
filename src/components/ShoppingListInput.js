import React, { useState } from "react";

function TodoInput(props) {
    const [inputTextName, setInputTextName] = useState("");
    const [inputTextQty, setInputTextQty] = useState("");
    const handleEnterPress = (e) => {
        e.preventDefault();
        console.dir(e);
        const inputText = inputTextName + " : " + inputTextQty;
        props.addList(inputText);
        setInputTextName("");
        setInputTextQty("");
    };
    return (
        <div className="input-container">
            <form
                onSubmit={handleEnterPress}
                style={{
                    display: "flex",
                    gap: "15px",
                }}
            >
                <input
                    type="text"
                    className="input-box"
                    placeholder="Enter Name"
                    value={inputTextName}
                    required
                    onChange={(e) => {
                        setInputTextName(e.target.value);
                    }}
                />
                <input
                    type="number"
                    className="input-box"
                    placeholder="Enter Quantity"
                    value={inputTextQty}
                    required
                    onChange={(e) => {
                        setInputTextQty(e.target.value);
                    }}
                />
                <button type="submit" className="add-btn">
                    Add Item
                </button>
            </form>
        </div>
    );
}

export default TodoInput;
