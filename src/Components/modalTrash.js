import { trash_IMG_PATH } from "./assets"


export default function MoveToTrash(){
    return(
        <div style={{display: "flex", 
        flexDirection: "raw",
        justifyContent: "flex-start"
        }}>
            <button style={{
                display: "flex",
                width: "240px", height: "48px", backgroundColor: "#E4E6E7",
            alignItems: "center",
            justifyContent: "start",
            borderRadius: "10px", border: "none"}}>
                <img src={trash_IMG_PATH} style={{paddingRight: "18px", paddingLeft: "10px"}} alt=""/>Move to trash</button>
            {/* <img src="./assets/Upward Arrow.png" alt="" >Upload</button>   */}
        </div>
    )
}