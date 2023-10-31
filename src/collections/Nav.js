import React from 'react'
import '../App.css';
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user');//will check if the user data is stored in a local storage

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        console.warn("logged out")
        navigate('/signup')
    }


    return (
        <div className='nav'>
            {auth ? <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/addproduct"}>Addproduct</Link></li>
                <li><Link to={"/update"}>UpdateProduct</Link></li>
                <li><Link to={"/profile"}>{JSON.parse(auth).name}</Link></li>
                <li><Link onClick={logout} to={"/signup"}>Logout({JSON.parse(auth).name})</Link></li>
            </ul> :
                <ul className='nav-right'>
                    <li><Link to={"/signup"}>Sign Up</Link></li>
                    <li><Link to={"/login"}>LogIn</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav