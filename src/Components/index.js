import { dotes_IMG_PATH } from "./assets"
import ToDoList from "./toDoList"

export default function ToDoListMap() {
//     const [toDos, setToDos] = useState([
//         {
//             exercise: "Write Essay",
//             name: "To Do",
//             isActive: true,
//         },
//         {
//             exercise: "One Hour CSS Course Online",
//             name: "Done",
//             isActive: false,
//         },
//         {
//             exercise: "Buy One Way Tickets to San Fransico",
//             name: "Trash",
//             isActive: false,
//         },
//         {
//             exercise: "Go to Gym",
//             name: "Trash",
//             isActive: false,
//         },
//         {
//             exercise: "Buy Groceries",
//             name: "Trash",
//             isActive: false,
//         },
//    ])

   const toDos=([
    {
        exercise: "Write Essay",
        name: "To Do",
        isActive: true,
    },
    {
        exercise: "One Hour CSS Course Online",
        name: "Done",
        isActive: false,
    },
    {
        exercise: "Buy One Way Tickets to San Fransico",
        name: "Trash",
        isActive: false,
    },
    {
        exercise: "Go to Gym",
        name: "Trash",
        isActive: false,
    },
    {
        exercise: "Buy Groceries",
        name: "Trash",
        isActive: false,
    },
])
console.log("hello")
return(
    <div>
        {toDos.map((item, index) => <ToDoList item={item} key={index}/>)}
    </div>
)
}


