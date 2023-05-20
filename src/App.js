import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingListInput from "./components/ShoppingListInput";
import ShoppingList from "./components/ShoppingList";

function App() {
    const [shoppingList, setshoppingList] = useState([
        "Rice : 1",
        "Wheat : 2",
        "LadyFinger : 5",
        "Potato : 4",
        "Chilli : 2",
        "Sauce : 1",
    ]);
    let addList = (inputText) => {
        if (inputText !== "") setshoppingList([...shoppingList, inputText]);
    };
    const deleteListItem = (key) => {
        let newshoppingList = [...shoppingList];
        newshoppingList.splice(key, 1);
        setshoppingList([...newshoppingList]);
    };
    return (
        <div
            className="main-container"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "80px",
            }}
        >
            <Header />
            <div className="center-container">
                <ShoppingListInput addList={addList} />
                <h1 className="app-heading">Shopping List</h1>
                <hr />
                {shoppingList.map((listItem, i) => {
                    return (
                        <ShoppingList
                            key={i}
                            index={i}
                            item={listItem}
                            deleteItem={deleteListItem}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
