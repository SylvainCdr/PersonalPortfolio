import "./style.scss";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function Homepage() {
  return (

    //Animation CSS 
      <div class="animation-container">
  <div class="lightning-container">
    <div class="lightning white"></div>
    <div class="lightning red"></div>
  </div>
  <div class="boom-container">
    <div class="shape circle big white"></div>
    <div class="shape circle white"></div>
    <div class="shape triangle big yellow"></div>
    <div class="shape disc white"></div>
    <div class="shape triangle blue"></div>
  </div>
  <div class="boom-container second">
    <div class="shape circle big white"></div>
    <div class="shape circle white"></div>
    <div class="shape disc white"></div>
    <div class="shape triangle blue"></div>
  </div>
{/* Fin animation CSS */}

        <div className="homepage">
      <div className="homepage__title">
        <h1>Sylvain Cadoret</h1>
        <h2>
          Développeur web Full-stack junior
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eaque.
          Optio consectetur cupiditate repudiandae. Dignissimos nemo sapiente
          maiores nobis qui a reprehenderit
        </h3>
        {/* bouton call to action */}
        <button>Découvrez mes projets</button>
      </div>
      <div className="homepage__picture">
        <img
          src="./media/profilPicture.jpg"
          alt="Sylvain Cadoret - développeur"
        />
      </div>

</div>

    </div>

    
  );
}

export default Homepage;
