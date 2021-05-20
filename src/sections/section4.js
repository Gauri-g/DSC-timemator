import "./section4.css";
import mainimg from "../images/sec4.jpg"; 
import dwndIcon from "../images/dwnd-icon.svg";
import timerIcon from "../images/timer-icon.svg";
import tasksIcon from "../images/tasks-icon.svg";

const section4 = () => {
  return (
    <>
      <div className="section4">
        <div className="container">
          <div className="row">
            <div className="top col col-lg-1"></div>
            <div className="top col col-lg-11 head2">
              <div className="row centerr">
                <div className="col-6">
                  <h3 className="focus">
                    Focus on your work.
                    <h3 className="focus">
                      Let Timemator remember and track everything for you.
                    </h3>
                  </h3>
                  <br />
                  <br />
                  <h1 className="highlighted focus2">Start your free </h1>
                  <h1 className="highlighted focus2">30-day trial today</h1>
                </div>
                <div className="col-6 flexend">
                  <div className="download">
                    <button className="btn1" href="#otherresources">
                      <> 
                        Download <img className="icon" src={dwndIcon} />
                      </>
                    </button>
                    <div className="footnote">
                      Requires macOS High Sierra (10.13) or higher
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mtt">
          <div className="col-6">
            <img className="fitimg" src={mainimg} />
          </div>
          <div className="col-6 conright"> 
            <div className="container icontext"> 
            <img className="icon" src={timerIcon} /> 
            <h3 className="mtt">Traditional time keeping</h3>
            <h6>In addition to Auto-tracking you can still use the traditional timer with the start / pause button, manually add timing sessions or edit existing ones.</h6>
            </div>
            <br />
            <br />
            <div className="container icontext mtt">
            <img className="icon" src={tasksIcon} /> 
              <h3 className="mtt">Tasks and Folders</h3>
              <h6>Organize your tracking time the way you want. Group by projects or clients, or both — it’s all up to you!</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default section4;
