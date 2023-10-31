import React, { useState } from "react";
import './assets/signup.css';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');

    const navigate = useNavigate();

    const addProduct=async()=>{
        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.warn(userId._id);

        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result= await result.json();
        console.log(result);
        // localStorage.setItem(JSON.stringify(result));
        navigate('/addproduct')
    }

    return (
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name" />
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price" />
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Category" />
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company" />
            <button onClick={addProduct} type="button">Add Product</button>
        </div>
    )
}

export default AddProduct;