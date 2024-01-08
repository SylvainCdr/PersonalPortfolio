import React from "react";
import "./style.scss";

function Portfolio() {
  const Portfolio = [
    {
      id: 1,
      name: "KASA - Location de biens",
      tech: "React",
      image: "kasa.png",
      link: "https://github.com/SylvainCdr/kasa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 2,
      name: "Loc'Event - Location de salles",
      tech: "Symfony",
      image: "locEvent.png",
      link: "https://github.com/SylvainCdr/ecfHall/tree/STAGING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 3,
      name: "Pokemons - Pokedex",
      tech: "React",
      image: "pokemon.png",
      link: "https://github.com/SylvainCdr/pokemon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 4,
      name: "CodExpress - Gestion et partage de snippets",
      tech: "Symfony",
      image: "codexpress.png",
      link: "https://github.com/SylvainCdr/codexpress ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 5,
      name: "BiblioApp - Interface de gestion de bibliothèque",
      tech: "Symfony",
      image: "biblioapp.png",
      link: "https://github.com/SylvainCdr/biblioapp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 6,
      name: "Site - e-commerce",
      tech: "HTML / CSS",
      image: "e-com_2.png",
      link: "https://github.com/SylvainCdr/WEBSITE_INTERACTIF ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 7,
      name: "Countries - API",
      tech: "React / Node.js",
      image: "countries.png",
      link: "https://github.com/SylvainCdr/countries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 8,
      name: "Portfolio architecte d'intérieur",
      tech: "React / Node.js",
      image: "portfolio-architecte.png",
      link: "https://github.com/SylvainCdr/Portfolio-architecte-Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },




  ];

  return (
    <div className="portfolio">
      <h1>Découvrez mes projets</h1>

      <div className="portfolio_container">
        {Portfolio.map((item) => (
          <div className="portfolio__img" key={item.id}>
            <h2>{item.name}</h2>
            <img src={"media/portfolio/" + item.image} alt={item.name} />
            <div className="portfolio__desc" key={item.id}>
              <div>
                <p>{item.tech}</p>
                <p>{item.description}</p>
      
                
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button> Voir le projet  <i class="fa-brands fa-github"></i></button>
                </a> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
