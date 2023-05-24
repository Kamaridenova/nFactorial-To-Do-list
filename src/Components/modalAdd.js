import './addTask.css';

export default function ModalAddTask(){
    return(
    <div className='modalAddTask'>
        <p className='nameModalAddTask'>Add New To Do</p>
        <textarea className='textareaModal'>Your text</textarea>
        <button className='buttonModalAddTask'>Add</button>
    </div>

    )
}