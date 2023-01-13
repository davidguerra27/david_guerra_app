import React from "react";


const UserCard = ({ user }) => {
    return (
        <div className="user">
            <div>
                <p>{user.login}</p>
            </div>

            <div>
                <img src={user.avatar_url !== null ? user.avatar_url : 'https://via.placeholder.com/400'} alt={user.login} />
            </div>
            <div>
                <span>user id:  {user.id}</span>
                <h3>{user.login}</h3>
                <p>{user.bio}</p>
            </div>
        </div>
    );
}

export default UserCard; 