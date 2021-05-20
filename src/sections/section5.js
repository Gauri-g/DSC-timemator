import "./section5.css"; 
import secimg from "../images/sec5.png";

const section5 = () => {
    return(
        <>
        <div className="section5">
            <div className="container">
            <div className="row">
             <div className="top col col-lg-1"></div>
             <div className="top col col-lg-11">
                <h1 className="highlighted bold">Review and Report</h1>  
                <div className="heads">
                <h2>Every second counts</h2> 
                <div className="borderr mt0"></div>
                </div>
             </div>
             <div className="container mt0">
             <img src={secimg} alt="image" />
             </div>
             </div> 
           </div>
        </div>
        </>
    )
}

export default section5;