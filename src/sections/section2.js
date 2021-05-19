import "./section2.css";
import img from "../images/timeline-icon.svg";

const section2 = () => {
    return(
        <>
        <div className="section2">
            <div className="container">
            <div className="row">
             <div className="col col-lg-1">
                 <img src={img}/>
             </div>
             <div className="col col-lg-11">
                <h1 className="highlighted bold">Activity Timeline</h1>  
                <h2>Always remember where your time went</h2>
                <h3 className="para">Timemator automatically captures everything you do on your Mac. You can go back to review what you were working on and with just a few clicks, assign the time to your projects.</h3>
                <div className="margintop"><button className=" btn2" href="#otherresources">
                  See it in action
                </button>
                </div>
             </div>
             </div>
             </div>
        </div>
        </>
    )
}

export default section2;