import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import { Link } from 'react-router-dom';


const Aff = () => {

    const [list, setList ] = useState([]);
    const Data =()=> {
    
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setList(res.data))
    .catch(err => console.log(err))
   }
  useEffect(()=>{
    Data()
  })
  
       
 

        return (
    
        <div className="App">

        {
        list.map(item=>(
          <div className='card'>
            <img src='https://beninwebtv.com/wp-content/uploads/2022/12/Lionel-Messi.jpg'/>
            <Link to="/user" state={list}><p>{item.name}</p></Link>

            <p>{item.username}</p>
            <p>{item.phone}</p>

            </div>
       ))
      }
   

    </div>
  );
   
}

 export default Aff;