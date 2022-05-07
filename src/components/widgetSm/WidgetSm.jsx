import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethod";

export default function WidgetSm() {
const [users, setUsers] = useState([])

useEffect(() => {
  const getUsers= async ()=>{
    try {
      const res= await userRequest.get("users/?new=true")
      setUsers(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  

 getUsers();
}, [])


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map((user)=>(

        <li className="widgetSmListItem" key={user._id}>
          <img
            src={ "https://carouselcenter.org/wp-content/uploads/2017/01/blank-human-image.png"}     
                  
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">{user.email}</span>
          </div>
         
        </li>
      ))}
       
      </ul>
    </div>
  );
}
