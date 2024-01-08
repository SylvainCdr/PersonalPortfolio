import React from "react";
import "./style.scss";

function Contact() {

const EmailSent = () => {
  alert("Votre message a bien été envoyé");
}


  return (
    <div className="contact-container">

  
      
      <h1>Contactez-moi</h1>
      <form>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="Envoyer" onClick={EmailSent} />
      </form>

      {/* carte de visite avec localisation sur carte  */}
      {/* <div className="contact-card">
        <h2>Adresse</h2>
        <p>20 Chemin des Bourgognes</p>
        <p>95000 Pontoise</p>
        <h2>Téléphone</h2>
        <p>07 81 84 68 33</p>
        <h2>Email</h2>
        <p>
          <a href="mailto: sylvaincadoret@hotmail.com">
            sylvaincadoret@hotmail.com
          </a>
        </p>
        <h2>Réseaux sociaux</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/sylvain-cadoret/">
            <img src="./assets/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div> */}

      <div className="map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d334542.05257285957!2d1.7722439214952184!3d49.07505159097983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f59ac710fac3%3A0x30b82c3688b2b70!2sVal-d&#39;Oise!5e0!3m2!1sen!2sfr!4v1704737380035!5m2!1sen!2sfr"
          width="800"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>

      </div>
    </div>
  );
}

export default Contact;
