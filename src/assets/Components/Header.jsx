// import logo from "./assets/logo.vinted.png";

import { Link } from "react-router-dom";

const Header = (token, handleToken) => {
  return (
    <header>
      <div>
        <img
          className="logo"
          src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
          alt=""
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Recherche des articles"
          // value={search}
        />
      </div>
      <div className="header-button-log-sign">
        <button className="sign-up"> s'incrire</button>
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Déconnexion
          </button>
        ) : (
          <Link to="/login">
            <button className="login">se connecter</button>
          </Link>
        )}
      </div>
      <div>
        <button className="sold">vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
