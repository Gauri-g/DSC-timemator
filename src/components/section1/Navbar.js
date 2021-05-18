import logo from "../../images/timemator-logo.svg"
import "./Navbar.css"; 
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

const Navbar = () => {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light ">
          <a href="/">
            <img src={logo} alt="timemator"/>
            </a>
            <a>
            <h2 className="name">Timemator</h2>
          </a>
    
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse navRight" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  What's New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#otherresources">
                  Support
                </a>
              </li> 
              <li className="nav-item">
                <button className="nav-link button1" href="#otherresources">
                  Buy
                </button>
              </li> 
            </ul>
          </div>
        </nav>
        </div>
      );
}

export default Navbar;