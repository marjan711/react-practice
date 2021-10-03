import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendInfo = () => {
    const history=useHistory();
    const handClick=()=>{
        history.push("/friends")
    };
    const{friendId}=useParams();

    const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;

    const [friend,setFriend]=useState({});
    useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setFriend(data))
    },[url])
    
    return (
        <div>
            <h1>Name:{friend.name}</h1>
            <h2>USername:{friend.username}</h2>
            <h2>Email:{friend.email}</h2>
            <h2>Email:{friend.address?.city}</h2>
            <br />
            <button onClick={handClick}>Back To Friends</button>
        </div>
    );
};

export default FriendInfo;