import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import BooksSection from '../components/BooksSection'
import "./Books.css"
const image = require ("../images/catlogo.png")

const Books = () => {
    const [Data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            await axios
                .get("http://localhost:1000/api/v1/getBooks")
                .then((res) => setData(res.data.books))
        }
        fetch()
    })

    return (
        <div className="boo" style={{ minHeight: "91.8vh" }}>
            <div className="d-flex justify-content-center align-items-center py-3">
                <img
                    src={image}
                    alt="Palace of Prose"
                    width="400px"
                    height="350px"
                />
            </div>
            {Data ?
                <BooksSection data={Data} />
                :
                <div className="text-white">
                    Loading...
                </div>
            }
        </div>
    )
}

export default Books