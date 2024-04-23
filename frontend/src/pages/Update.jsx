
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./Update.css"

const Update = () => {
    const [Data,setData] = useState({
        bookname:"",
        description:"",
        author:"",
        image:"",
        price:""
    })
    const change = (e) => {
        const {name,value} = e.target
        setData({...Data,[name]:value})
    }

    const Update = async (e) => {
        e.preventDefault();
        await axios
            .put("http://localhost:1000/api/v1/updateBooks",Data)
            .then((res) => alert(res.data.message))
            setData({
                bookname:"",
                description:"",
                author:"",
                image:"",
                price:""
            })
    }

    console.log(Data);
    return (
        <div className="book d-flex justify-content-center align-items-center" style={{ minHeight: "91.8vh" }}>
           
            <div className="container p-5">
                <div className="mb-3">
                <p className="my-0" style={{ color: "white",fontFamily:"Garamond",fontSize:"23px" }}> </p>
                <br  />
                    <label for="exampleFormControlInput1" className="form-label text-white"
                    style={{fontFamily:"Garamond",FontSize:"20px",fontWeight:"bold"}}
                    >
                        Book Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="What is the name of the book?"
                        value={Data.bookname}
                        name="bookname"
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white"
                    style={{fontFamily:"Garamond",FontSize:"20px",fontWeight:"bold"}}
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Give a nice description for this book ^-^"
                        value={Data.description}
                        name="description"
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white"
                    style={{fontFamily:"Garamond",FontSize:"20px",fontWeight:"bold"}}>
                        Author
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="who wrote this book?"
                        value={Data.author}
                        name="author"
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white"
                    style={{fontFamily:"Garamond",FontSize:"20px",fontWeight:"bold"}}
                    >
                        Image
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Give the image url"
                        value={Data.image}
                        name="image"
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white"
                    style={{fontFamily:"Garamond",FontSize:"20px",fontWeight:"bold"}}>
                        Price
                    </label>
                    <input
                        type="Number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="What is the price of the book?"
                        value={Data.price}
                        name="price"
                        onChange={change}
                    />
                </div>
                <button className="upda" onClick={Update}
                
                >
                    Update Book
                </button>
            </div>
        </div>
    )
}


export default Update