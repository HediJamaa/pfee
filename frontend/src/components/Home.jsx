import React from 'react'
import "./Navbar.css"; // Import du fichier CSS


function Home() {
  return (
    <div>
      {/* Conteneur de l'image avec texte superposé */}
      <div className="image-container">
        <img src="/Chat1.jpg" className="header-image" />
        <div className="image-text">
          <h2>Bienvenue sur Adopt Me</h2>
          <p>
            Des milliers d’animaux attendent une famille aimante. Faites
            ladifférence dès aujourd’hui !
          </p>
          <div className="buttons">
            <button className="connecter">se connecter</button>
          </div>
        </div>
      </div>
      Bienvenue sur Adopt Me – Offrons un foyer à chaque animal !🐾❤️ Notre
      mission : Aider les animaux à trouver une famille aimante
    </div>
  );
}

export default Home