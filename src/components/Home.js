import React from "react";

function Home() {
  return (
    <div className="container mt-5">
      <h1 style={{ fontSize: "80px" }}>
        Akash <span className="text-primary">Soni</span>
      </h1>
      <h2>Web Developer</h2>
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/akashsoni21?
          lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bslqdh2iPTlKFsxeO0xVwMw%3D%3D"
          target="blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="http://github.com/akashsoni07" target="blank" className="ml-4">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
