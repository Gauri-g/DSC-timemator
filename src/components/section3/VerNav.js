import { useEffect, useState } from "react";
import "./VerNav.css";
import icon1 from "../../images/icon1.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";

const VerNav = () => {
  // const [navid,setNavid] = useState(0);
  // // const [para,setPara] = useState("");  
  // let para="";
   
  // function Content(val) {
  //   // setNavid(props.value);
  //   // if(val===0)
  //   // setPara("Timemator knows when you design in your favorite layout app, have your project files open, search for inspiration or have a meeting with your client.")
  //   // else if(val===1)
  //   // setPara("Timemator knows when you code in your favorite IDE or text-editor, have your project files open, search for references on Stackoverflow or join a scrum meeting.")
  //   // else if(val===2)
  //   // setPara("Timemator knows when you work on your next big movie in the video editor of your choice, have your project files open, or join a meeting with your team.")
  //   // else if(val===3)
  //   // setPara("Timemator is a great citizen in our daily workflow. Once configured, it will track your working time in the background. You will always have an overview of tracked hours and earned revenue for every single day, week or month.")
  //   console.log(val);
  //   if(val===0)
  //   para= "Timemator knows when you design in your favorite layout app, have your project files open, search for inspiration or have a meeting with your client.";
  //   else if(val===1)
  //   para = "Timemator knows when you code in your favorite IDE or text-editor, have your project files open, search for references on Stackoverflow or join a scrum meeting.";
  //   else if(val===2)
  //   para = "Timemator knows when you work on your next big movie in the video editor of your choice, have your project files open, or join a meeting with your team.";
  //   else if(val===3)
  //   para = "Timemator is a great citizen in our daily workflow. Once configured, it will track your working time in the background. You will always have an overview of tracked hours and earned revenue for every single day, week or month.";
  //   console.log(val);
  // }

  return (
    <>
      <div className="row mt">
        <div className="col-4 list group">
          <nav className="vernavbar" data-target="target-group-text-gallery">
            <a className="active item" href="#designers" data-item="0"  >
              <h1>For Designers</h1>
            </a>
            <br />
            <a href="#developers" data-item="1"  className="item" >
            <h1>For Developers</h1>
            </a>
            <br />
            <a href="#filmmakers" data-item="2"  className="item" >
            <h1>For Filmmakers</h1>
            </a>
            <br />
            <a href="#professionals" data-item="3"  className="item" >
            <h1>For any professional</h1>
            </a>
          </nav>
        </div>

        <div  className="col-7 content" id="target-group-text-gallery">
        {/* 
          <div>
            <p>{para}</p>
          </div> */}
           
          <div data-item="1"  >
            <p className="navtext">
            Timemator knows when you design in your favorite layout app, have your project files open, search for inspiration or have a meeting with your client.
            </p>
            <br />
            <p className="navtext fw">Timemator supports:</p>
            <br />
            <div className="iconlist">
              <img src={icon1}/>
              <img src={icon2}/>
              <img src={icon3}/>
              <img src={icon4}/>
              <img src={icon5}/>
            </div>
            <p className="navtext fe">... and many other.</p>
          </div>
          {/* <div  data-item="2" >
            <p>
            Timemator knows when you code in your favorite IDE or text-editor, have your project files open, search for references on Stackoverflow or join a scrum meeting.
            </p>
          </div>
          <div  data-item="3" >
            <p>
            Timemator knows when you work on your next big movie in the video editor of your choice, have your project files open, or join a meeting with your team.
            </p>
          </div>
          <div  data-item="4" >
            <p>
            Timemator is a great citizen in our daily workflow. Once configured, it will track your working time in the background. You will always have an overview of tracked hours and earned revenue for every single day, week or month.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default VerNav;
