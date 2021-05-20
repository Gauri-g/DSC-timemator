import "./section3.css";
import VerNav from "../components/section3/VerNav"
import img from "../images/at-icon.svg";
import secimg from "../images/sec3.jpg";

const section3 = () => {
    return(
        <>
        <div className="section3">
            <div className="container">
            <div className="row">
             <div className="top col col-lg-1">
                 <img src={img}/>
             </div>
             <div className="top col col-lg-11">
                <h1 className="highlighted bold">Auto-tracking
                <span className="badge-con">
                    <div className="badge">MAC ONLY</div>
                </span> </h1>  
                <div className="head">
                <h2>Let Timemator start</h2>
                <h2>the timer for you</h2>
                </div>
             </div>
             <div className="container margintop">
             <img src={secimg} alt="image" />
             </div>
             </div>
             <div className="row">
             <div className="top col col-lg-1">
                 
             </div>
             <div className="top col col-lg-11 head2">
                <div className="borderr"></div>
                <h2>See how Timemator</h2>
                <h2>can improve your workflow:</h2>
                <VerNav />
            </div>
            </div>
           </div>
        </div>
        </>
    )
}

export default section3;