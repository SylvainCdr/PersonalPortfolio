import React from "react";
import "./style.scss";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";
import Swal from "sweetalert2";


function Contact() {
  const EmailSent = () => {
    if (document.getElementById("name").value === "" || document.getElementById("email").value === "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$" || document.getElementById("message").value === "") {
      Swal.fire({
        title: "Erreur",
        text: "Veuillez renseigner tous les champs correctement",
        icon: "error"
      });
      return;
    }
    Swal.fire({
      title: "Merci",
      text: "Votre message a bien été envoyé",
      icon: "success"
    });
  //   alert("Votre message a bien été envoyé");
  };

  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>

      {/* carte de visite  */}
      <div className="card">
        <p>
          <i className="fa-solid fa-user"></i>Sylvain CADORET
        </p>
        <p>
          {" "}
          <i className="fa-solid fa-phone"></i>07 81 84 68 33
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:sylvaincadoret@hotmail.com">sylvaincadoret@hotmail.com</a>
        </p>
        <p>
          <i className="fa-brands fa-linkedin"></i>
          <a href="www.linkedin.com/in/sylvain-cadoret">Linkedin</a>
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i>Localisation : Pontoise
          (95000)
        </p>
      </div>

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d334542.05257285957!2d1.7722439214952184!3d49.07505159097983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f59ac710fac3%3A0x30b82c3688b2b70!2sVal-d&#39;Oise!5e0!3m2!1sen!2sfr!4v1704737380035!5m2!1sen!2sfr"
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>

      <form>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <input
          type="submit"
          value="Envoyer"
          onClick={EmailSent}
          className="submitButton"
        />
      </form>
    </div>
  );
}

export default Contact;
