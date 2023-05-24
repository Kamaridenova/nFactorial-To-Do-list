import React from "react";
import { dotes_IMG_PATH } from "./assets"
import CheckBox from "./checkbox";

export default function ToDoList({item}){
    
    
    return(
        <div className="d-flex flex-raw" style = {{paddingBottom: "10px" , width: "100%", alignContent: "start"}}>
            <button style={{border: "none", backgroundColor: "transparent"}}>
                <img 
                src={dotes_IMG_PATH} 
                // className="hr-dashed"
                style={{
                // width: "5%",
                paddingRight: "10px"
                }} 
                alt=""
                />
            </button>
            
            <CheckBox/>
            <p style={{fontSize: "18px", width: "50%", marginLeft: "10px"
            // marginBottom: "5px"
            }}>{item.exercise}</p>
        </div>
    )
}