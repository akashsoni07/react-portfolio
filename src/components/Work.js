import React from "react";

function Work() {
  return (
    <div className="container mt-3">
      <h1 style={{ fontSize: "80px" }}>
        My <span className="text-primary">Work</span>
      </h1>
      <h2>Check out some of my projects...</h2>
      <div className="row">
        <div className="col-md-6 mt-4 text-center">
          <div className="project">
            <a
              href="https://compassionate-mestorf-d3784e.netlify.app/"
              target="blank"
            >
              1.Vacation Website{" "}
            </a>
          </div>
          <div className="project mt-2">
            <a
              href="https://heuristic-hypatia-d28c3f.netlify.app/"
              target="blank"
            >
              2.JavaScript Typing Tester App{" "}
            </a>
          </div>
          <div class="project mt-2">
            <a
              href="https://admiring-blackwell-56070b.netlify.app/"
              target="blank"
            >
              3.Javascript Calculator{" "}
            </a>
          </div>
          <div className="project mt-2">
            <a href="https://gallant-bartik-2a4fa8.netlify.app/" target="blank">
              4.Javascript Digital Watches{" "}
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center mt-4">
          <div className="project">
            <a
              href="https://brave-blackwell-fd6033.netlify.app/"
              target="blank"
            >
              5.Javascript Stopwatch{" "}
            </a>
          </div>
          <div className="project mt-2">
            <a href="https://netflixclone21.netlify.app/" target="blank">
              6.ReactJS Netflix Clone{" "}
            </a>
          </div>
          <div className="project mt-2">
            <a href="https://weather-app21.netlify.app/" target="blank">
              7.ReactJS Weather App{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
