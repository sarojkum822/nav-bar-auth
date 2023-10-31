import React, { useEffect, useState } from 'react'
import './assets/signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
        result = await result.json();
        console.warn(result);
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/')
    }

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[navigate]);

    const login=()=>{
        navigate('/login')
    }


    return (
        <div className='register'>
            <h1>Register</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <button onClick={collectData} className='appButton' type='button'>Sign Up</button>
            <button onClick={login} type='button'>Log In</button>
        </div>
    )
}

export default Signup