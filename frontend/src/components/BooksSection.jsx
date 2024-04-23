import React from 'react'
import { Link } from "react-router-dom"


const BooksSection = ({ data }) => {

    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap ">
            {data && data.map((item,index) => (
            <div 
                className="m-3" 
                style={{
                    width:"230px",
                    height:"420px",
                    border:"2px solid black",
                    borderRadius:"20px",
                    background: "linear-gradient(to right,#331913,#190c09"
                    
    
                }}
            > 
   
                <div>
                    <img 
                        style={{
                            width:"230px",
                            height:"250px",
                            borderTopLeftRadius:"20px",
                            borderTopRightRadius:"20px"
                        }} 
                        className="img-fluid" 
                        src={item.image} 
                        alt="/" 
                    />
                </div>
                <h5 style={{fontSize:"20px",color:"#f5dab0",fontFamily:"Garamond",fontWeight:"bold"}} className="p-2 my-1 ">
                    {item.bookname.slice(0,20)}..
                </h5>
                <b 
                    style={{fontSize:"19px",color:"silver",fontFamily:"Garamond"}}
                    className="m-0 px-2">Rs. {item.price}
                </b> 

                <div className="d-flex justify-content-around align-items-center my-2 p-2 m-2"
                
                 style={{fontSize:"20px",color:"beige",fontFamily:"Garamond"}}>
                    <Link to="/Update" className="Update my-3">Update</Link>
                    <button className="btn btn-danger"
                        >
                     <b>🗑️</b></button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default BooksSection