import React from "react";
import img from "./IMG_21.jpg"

function About() {
  return (
    <div className="container mt-3">
      <h1 style={{ fontSize: "80px" }}>
        About <span className="text-primary">Me</span>
      </h1>
      <h2>Let me tell you a few things...</h2>
      <div className="row">
       <div className="col-md-4 text-center mt-5">
        <img src={img} alt="akash" width="200px" height="200px" style={{borderRadius:"50%",boxShadow:"0 0 10px black"}} />
       </div>
       <div className="col-md-4 mt-5">
         <h2 className="text-primary">Bio</h2>
         <h6>I have completed Bachelor of Computer Science & Engineering and Web development , 
           Quick grasper of new things , Adaptation to new and challenging environment ,
           Good analytical and optimist approach to problem solving.If I talk about my hobby so i like Coding and 
           Singing.
         </h6>
       </div>
       <div className="col-md-4 mt-5">
        <h2 className="text-primary">Experience</h2>
        <h6>I have one month experience as Junior React Developer in Encourage Infotech , Indore(Madhya Pradesh).</h6>
       </div>
      </div>
    </div>
  );
}

export default About;
