import React, { useEffect, useState } from 'react'
import './assets/signup.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();




    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        } else {
            alert('Please Enter correct details');
        }
    }
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);


    return (
        <div className='register'>
            <h1>Log In</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button onClick={handleLogin} className='appButton' type='button'>Log In</button>
        </div>
    )
}

export default Login