import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



function User() {

    const [userId, setUserId ] = useState([]);
    const Location = useLocation()
         const DataID =()=> {
       axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
     .then(res => setUserId(res.data))
     .catch(err => console.log(err))
   }
  useEffect(()=>{
    DataID()
  })
  
        console.log(userId);
 

        return (
    
        <div className="App">

        {
        userId.map(item=>(
          <div className='user' key={item.id}>
            
            <Link to="/post" state={userId}><h3>{item.title}</h3></Link>
            <p>{item.body}</p>
            

            </div>
       ))
      }
   

    </div>
  );
   
}

 export default User;