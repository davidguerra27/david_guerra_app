import React from "react";
import { useEffect , useState } from "react";
import UserCard from './UserCard'
import './App.css';
import SearchIcon from './search.svg';




const API_URL = 'https://api.github.com/users/';

const App = () =>{

    const [users,setUsers] = useState([]);

    const searchUsers = async (username) => {
        const response = await fetch(`${API_URL}${username}`);
        const data = await response.json();
        console.log(data)
        setUsers([data])
        console.log(users);
    }
    

    useEffect(()=>{
        searchUsers('4ian');
        
    },[]);
    console.log(users +"entrei")
    return (
        <div className="app">
            <h1>GitHub Browser</h1>
            <div className="search">
                <input
                    placeholder="Search for GitHub Users"
                    value="davidguerra27"
                    onChange={()=>{}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
            </div> 

            
                
                <div className="container">
                    {users.map((user) => (
                        <UserCard user={user}/>
                    ) )} 
                </div>
                
              
           

           
        </div>
    );
}

export default App