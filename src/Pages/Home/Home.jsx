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

      <div className="section_1">
        <div className="homepage__title">
          <h1>Sylvain Cadoret</h1>
          <h2>Développeur web Full-stack junior</h2>
          <p>Enthousiaste du code et de la créativité ! </p>
          <p>
            {" "}
            Découvrez mon portfolio où je fusionne mes compétences en
            développement web avec une passion pour l'innovation.{" "}
          </p>

          <p> Let's craft the future together! 💻✨</p>
          {/* bouton CTA*/}
          <button>Découvrez mes projets</button>
        </div>
        <div className="homepage__picture">
          <img
            src="./media/profilPicture.jpg"
            alt="Sylvain Cadoret - développeur"
          />
        </div>
      </div>
      <div className="section_2">
        
          <div className="presentation_titleImg">
            <div className="presentation_title">"Commerce, Web, Élan"</div>
            <div className="presentation_img">
              <img src="./media/fusee2.png" alt="Sylvain Cadoret" />
            </div>
          </div>
          <div className="presentation_text">
            <p>Bonjour à tous, </p>
            <p>
              Directeur Adjoint de magasin en reconversion après 9 ans de
              commerce.{" "}
            </p>
            <p>
              Passionné de nature, de voyage, de plongée, d'aquariophilie, de
              terrariophilie et de botanique, je suis reconnu pour mon approche
              positive et mon enthousiasme contagieux. Ma reconversion vers le
              développement web découle de ma fascination pour ce domaine.{" "}
            </p>
            <p>
              Aujourd'hui, je souhaite mettre à profit mes compétences au
              service d'une entreprise dynamique.{" "}
            </p>
            <p>
              Mon objectif est de contribuer à des projets web passionnants tout
              en continuant à apprendre et à grandir professionnellement.{" "}
            </p>
            <p>
              Ma combinaison d'expérience en gestion, de positivité et de mon
              attrait pour le développement web fait de moi un collaborateur
              déterminé, enthousiaste et prêt à relever de nouveaux défis. Je
              suis impatient de contribuer au succès de votre entreprise.{" "}
            </p>
            <p>
              Merci de prendre le temps de découvrir mon parcours, et n'hésitez
              pas à me contacter pour discuter de nos futures collaborations.
            </p>
          </div>
        
      </div>
    </div>
  );
}

export default Homepage;
