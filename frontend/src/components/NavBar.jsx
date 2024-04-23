import react from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const image = require ("../images/logop.png")
  return (
    <div style={{ borderBottom: "10px solid #5c473d"  }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img 
              src={image} 
              alt="Palace of Prose" 
              width="80px" 
              height="80px" 
            />
          </a>
          <a
            className="navbar-brand text-brown"
            href="#"
            style={{ fontSize:"30px",fontFamily:"Garamond" }}
          >
            <b>The Purrfect Prose</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link 
                className="nav-item nav-link active text-brown" 
                to="/"
                style={{ fontSize:"23px",fontFamily:"Garamond" }} 
              >
                <b>Home</b>
              </Link>
              <Link className="nav-item nav-link active text-brown" 
                to="/Books"
                style={{ fontSize:"23px",fontFamily:"Garamond" }}  
              >
                <b>Books</b>
              </Link>
              <Link className="nav-item nav-link active text-brown" 
                to="/AddBooks"
                style={{ fontSize:"23px",fontFamily:"Garamond"}}  
              >
                <b>Add Books</b>
              </Link>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
