// import logo from "./assets/logo.vinted.png";

import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  console.log(handleToken);

  return (
    <header>
      <div>
        <Link to="/">
          <img
            className="logo"
            src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
            alt=""
          />
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Recherche des articles"

          // value={search}
        />
      </div>
      <div className="header-button-log-sign">
        <Link to="/signup">
          <button className="sign-up">s'inscrire</button>
        </Link>

        {token ? (
          <button
            className="deconected"
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
        <Link to={token ? "/publish" : "/login"}>
          <button className="sold">vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
