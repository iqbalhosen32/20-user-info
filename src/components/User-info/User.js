import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const {name, email, address, image, phone, income} = props.user;
    const handleUserAdd = props.handleUserAdd;
    const userStyle = {
        border: '2px solid green',
        margin: '10px',
        padding: '10px'
    }
    const btnStyle ={
        border: 'none',
        background: 'red',
        padding: '10px',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer'
    }
    
    return (
        <div style={userStyle}>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h5>Email: <small>{email}</small></h5>
            <h5>Phone: {phone}</h5>
            <h5>Address: {address}</h5>
            <h5>Yearly Income: {income}</h5>
            <button onClick={() =>handleUserAdd(props.user)} style={btnStyle}> <FontAwesomeIcon icon={faUserPlus} /> Add Me</button>
        </div>
    );
    };
export default User;