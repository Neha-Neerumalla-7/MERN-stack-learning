import React from "react";
import Header from "./src/Header";
import Student from "./Student";
function App(){
    
    return (
        <div>
            <h1>Component Nesting Demo</h1>
            <Header />
            <Student />
        </div>
    );
}
export default App;