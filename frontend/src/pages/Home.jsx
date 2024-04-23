import react from "react"
import "./Home.css"
import { Link } from "react-router-dom"


const Home = () => {

    return (
        <div className="Home-Page text-white container-fluid d-flex justify-content-center align-items-center">
            <div className="row container">
                <div
                    className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
                    style={{ height: "91.8vh" }}
                >
                    <h4 style={{ fontSize: "100px",fontFamily:"Garamond" }}>The Pawsome</h4>
                    <h3 style={{ fontSize: "80px",fontFamily:"Garamond" }}>Page-Turners 📃 </h3>
                    <p className="my-0" style={{ color: "white",fontFamily:"Garamond",fontSize:"23px" }}>
                        <br />Our shelves are brimming with tales of faraway lands,
                         fantastical creatures, and unforgettable characters.
                         <br />We sell portals to endless new worlds ^_^
                    </p>
                    <Link to="/Books" className="viewBook my-3">View Books</Link>
                </div>
                <div
                    className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
                    style={{ height: "91.8vh" }}
                >
                    <img
                        className="img-fluid homeimg"
                        src="https://i.pinimg.com/564x/af/c7/c7/afc7c7e7af051ddb4538b3fc0847ad7b.jpg"
                        alt="/"
                    />
                </div>

                <div 
                    id="carouselExampleCaptions" 
                    className="carousel slide col-lg-12"
                    
                >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner d-flex justify-content-center align-items-center">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/564x/7a/27/ee/7a27eefa2df7fa693064c6e9aa96a0f9.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{color:"#362d1f"}}>First slide label</h5>
                                <p style={{color:"#362d1f"}}>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/564x/7a/27/ee/7a27eefa2df7fa693064c6e9aa96a0f9.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{color:"#362d1f"}}>Second slide label</h5>
                                <p style={{color:"#362d1f"}}>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/564x/7a/27/ee/7a27eefa2df7fa693064c6e9aa96a0f9.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{color:"#362d1f"}}>Third slide label</h5>
                                <p style={{color:"#362d1f"}}>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
