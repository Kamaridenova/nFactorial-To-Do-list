import React, {useState} from "react";


function ButtonsToDoItem(item){
   

    const [isBtnClick, setIsBtnClick] = useState(false);

    const changeBtnClick = ()=>{
        setIsBtnClick(!isBtnClick);
        console.log("aaaaa!!")
    }
    
    return(
            <button className={item.name} 
                style={{
                    display: "flex", 
                    width: "87px",
                    height: "40px",
                    backgroundColor: isBtnClick ? "#081E346B" : "#F0F0F0",
                    borderRadius: "38px",
                    border: "none",
                    color: isBtnClick ? "white" : "black",
                    padding: "8px 24px",
                    gap: "28px",
                    fontSize: "15px"
             }} 
                     onClick={changeBtnClick}> 
                <p>{item.titleTask}</p>
            </button>
       
    )
}
export default ButtonsToDoItem;