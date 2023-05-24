import React, {useState} from "react";
import ButtonsToDoItem from "./buttonsItem";
// import './App.css';
   




function ButtonsToDo(){
 
    const [btnClick, setBtnClick] = useState(false)
    
    const changeBtnClick = ()=>{
        // btnClick ? {StyleBtn} : {StyleBtnClicked};
        setBtnClick(current => !current);
        console.log("aaaaa!!")
    }
    const btnToDoItems=[
        {name: "ToDo", titleTask: "To Do", id: "1", isActive: false},
        {name: "Done", titleTask: "Done", id: "2", isActive: false},
        {name: "Trash", titleTask: "Trash", id: "3", isActive: false},
    ]
    
    return(
        <div className="ToDos" 
        style={{
            display: 'flex',
            direction: 'row',
            justifyContent: 'space-between',
            width: "33%",
        }}
        >
            {btnToDoItems.map((item, index)=>(
              <ButtonsToDoItem name={item.name} titleTask={item.titleTask}/>

            ))}
            
            
            
        </div>
       
    )
}
export default ButtonsToDo;
