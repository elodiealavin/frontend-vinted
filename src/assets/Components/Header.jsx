// import logo from "./assets/logo.vinted.png";

const Header = () => {
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
        <input type="text" placeholder="Recherche des articles" />
      </div>
      <div className="header-button-log-sign">
        <button className="sign-up"> s'incrire</button>
        <button className="login">se connecter</button>
      </div>
      <div>
        <button className="sold">vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
