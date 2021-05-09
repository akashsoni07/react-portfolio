import React from "react";

function Contact() {
  return (
    <div className="container mt-3">
      <h1 style={{ fontSize: "80px" }}>
        Contact <span className="text-primary">Me</span>
      </h1>
      <h2>This is how you can reach me...</h2>
      <div className="row">
        <div className="col-md-8 mt-5 p-2 text-center" style={{boxShadow:"0 0 10px black",borderRadius:"10px"}}>
          <h3>Email : akashsoni4078@gmail.com</h3>
        </div>
        <div className="col-md-4 mt-5 p-2 text-center" style={{boxShadow:"0 0 10px black",borderRadius:"10px"}}>
          <h3>Phone : 6265784078</h3>
        </div>
        </div>
        <div className="text-center p-2 mt-5" style={{boxShadow:"0 0 10px black",borderRadius:"10px"}}>
          <h3>Address : 451228 - Balsamud , Dist - Khargone(Madhya Pradesh)</h3>
        </div>
    </div>
  );
}

export default Contact;
