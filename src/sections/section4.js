import "./section4.css";
import img from "../images/sec1.png";
import dwdIcon from "../images/dwd-icon.svg";
import dwndIcon from "../images/dwnd-icon.svg";

const section4 = () => {
  return (
    <>
      <div className="section4">
          <div className="centerr">
            <div className="download">
            <button className="btn1" href="#otherresources">
                <> Download <img className="icon" src={dwndIcon} /></>
            </button>
            <div className="footnote">Requires macOS High Sierra (10.13) or higher</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default section4;
