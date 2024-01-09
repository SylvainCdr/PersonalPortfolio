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
          <h2>Développeur web Full-stack junior</h2>
          <p>🚀 Enthousiaste du code et de la créativité ! </p>
          <p>
            {" "}
            Découvrez mon portfolio où je fusionne mes compétences en
            développement web et mobile avec une passion pour l'innovation.{" "}
          </p>
          <p>
            {" "}
            Explorez avec moi l'intersection entre la gestion et la
            programmation, et plongez dans un univers où chaque ligne de code
            est une opportunité de créer quelque chose d'extraordinaire.{" "}
          </p>
          <p> Let's craft the future together! 💻✨</p>
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
