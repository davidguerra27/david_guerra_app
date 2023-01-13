import React from "react";
import { useState } from "react";
import UserCard from './UserCard'
import RepoCard from './RepoCard'
import './App.css';
import SearchIcon from './search.svg';




const API_URL = 'https://api.github.com/users/';

const App = () =>{
    const [searchTerm, setSearchTerm] = useState("");
    const [users,setUsers] = useState([]);
    const [repos,setRepos] = useState([]);

    const searchUsers = async (username) => {
        const response = await fetch(`${API_URL}${username}`);
        const data = await response.json();
        console.log(data)
        setUsers([data])
        console.log(users);
    }
    const searchRepositories = async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);


        const data = await response.json();
        setRepos(data)
        console.log(data)
        
    }

   
    return (
        <div className="app">
            <h1>GitHub Browser</h1>
            <div className="search">
                <input
                    placeholder="Search for GitHub Users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchUsers(searchTerm)}
                />
            </div> 

            
                
                <div className="container" onClick={()=> searchRepositories(searchTerm)}>
                    {users.map((user) => (
                        <UserCard user={user}/>
                    ) )} 
                </div>
                
                <div className="container">
                    {repos.map((repo) => (
                        <RepoCard repo={repo}/>
                    ) )} 
                </div>
   
        </div>
    );
}

export default App