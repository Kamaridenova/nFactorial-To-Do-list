import { useState } from 'react';
import './addTask.css';
import ModalAddTask from './modalAdd';

export default function AddTask(){
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    return(
        <div>
            <div className="container-addTask">
            <button className="buttonPlus" 
            onClick={()=>setIsAddModalVisible(!isAddModalVisible)}
            >
                <p className="plusInsideButton">+</p> 
                    </button>
            </div>
            {isAddModalVisible && 
            <ModalAddTask/>
            } 
            
        </div>
    )
}