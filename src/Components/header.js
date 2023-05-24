import React from "react";
function Header(){
    return(
        <div className="d-flex flex-column align-items-start">
            <h2 className="d-flex flex-column align-items-start"
            style={{width: '100%', 
            height: '100%'}}>Simple To Do List</h2>
            <p style={{font: "Inter", 
            fontSize: "16px", 
            // fontWeight: "bold"
        }}
            >Today is awesome day. The weather is awesome, you are awesome too!</p>
        </div>
    )
    console.log('simple')
}
export default Header;