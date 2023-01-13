import React from "react";
import bg from './repoBG.jpg'; 



const RepoCard = ({ repo }) => {
    return (
        <div className="repo">
            <div>
                <p>Repository ID: {repo.id}</p>
            </div>
            <div>
                <img src={bg} alt="github"/>
            </div>
            
            <div>
                
                <h3>{repo.name}</h3>
                <br></br>
                <h4>Language: {repo.language}</h4>
                <h4>Visibility: {repo.visibility}</h4>
                <br></br>
                <h4>First Push: {repo.pushed_at}</h4>
                <h4>Last Update: {repo.updated_at}</h4>
            </div>
        </div>
    );
}

export default RepoCard; 