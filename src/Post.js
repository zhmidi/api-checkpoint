import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { useLocation } from "react-router-dom";

const Post =()=> {

    const [postId, setPostId ] = useState([]);
    const Location = useLocation()
         const DataID =()=> {
       axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
     .then(res => setPostId(res.data))
     .catch(err => console.log(err))
   }
  useEffect(()=>{
    DataID()
  })
  
        console.log(postId);
 

        return (
    
        <div className="App">

        {
        postId.map(item=>(
          <div className='post' key={item.id}>
            
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.body}</p>
            

            </div>
       ))
      }
   

    </div>
  );
   
}



export default Post;