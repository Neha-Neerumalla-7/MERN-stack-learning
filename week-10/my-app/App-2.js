import React from "react";
function App(){
    const content=(
        <div>
            <h1 style={{color:"blue"}}>Welcome to JSX</h1>
            <p> JSX allows us to write HTML inside JavaScript</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
            </ul>
        </div>
    );
    return (
        <div>
            <h1>Writing Markup with JSX</h1>
            {content}
        </div>
    );
}