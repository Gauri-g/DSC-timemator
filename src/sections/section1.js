import Navbar from "../components/section1/Navbar";
import "./section1.css";
import img from "../images/sec1.png";

const section1 = () => {
    return(
        <>
        <div className="section1">
            <Navbar />
            <div className="container heading">
                <h1 className="bigtext">Automate your time tracking </h1>
                <h1 className="bigtext">and forget about the timer.<span className="highlighted"> Forever.</span> </h1>
            </div>
            <div className="container btns" >
                <div className="download">
                    <button className="btn1" href="#otherresources">
                    Download Free Trial
                    </button>
                    <div className="footnote">
                        Version 2.7.4 ∙ Release Notes
                    </div>
                </div>
                <div className="download">
                <button className=" btn2" href="#otherresources">
                  Watch Video
                </button>
                </div>
            </div>
            <div className="imgmain">
                <img src={img} alt="image" />
            </div>
        </div>
        </>
    )
}

export default section1;