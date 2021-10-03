import React from 'react';
import {Link,useHistory} from 'react-router-dom';

const Friend = (props) => {
    const history =useHistory();
    
    
    const divStyle={border:'2px solid blue'};
    const {name,id,email,phone,address} = props.person;
    const url=`/friend/${id}`;
    const handleClick=()=>{
        history.push(`/friend/${id}`);
    };
    return (
        <div style={divStyle}>
            <h3>Name :{name}</h3>
            <p>Adress:{address.city}</p>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={url}>Visit Me</Link>
            <br />
            <button onClick={handleClick}>Friends</button>
        </div>
    );
};

export default Friend;