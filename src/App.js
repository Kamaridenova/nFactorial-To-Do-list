// import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import ButtonsToDo from './Components/buttons';
import AddTask from './Components/addTask';
import MoveToTrash from './Components/modalTrash';
import ToDoListMap from './Components';
import CheckBox from './Components/checkbox';

function App() {
  return (
    <div className="App d-flex mx-5 flex-column mt-10">
      <Header/>
      <div className=" d-flex flex-raw" style={{
        justifyContent: "space-between",
        marginTop: "80px" }}>
        <ButtonsToDo/>
      <AddTask/>
      </div>
      <p style={{display: "flex", marginTop: "50px", fontWeight: "bold", fontSize: "24px"}}>To Do</p>
      <div className='horizontal-divider'>
      </div>
      <div className=" d-flex flex-column" style={{marginTop: "40px"}}>
         <ToDoListMap/>
        <MoveToTrash/>
    
      
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
