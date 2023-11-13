import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newlestter, setNewlestter] = useState(false);
  const [errorMessage, setErroMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password, username, newlestter);
    try {
      setErroMessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username,
          email,
          password,
          newlestter,
        }
      );
      handleToken(response.data.token);
      navigate("/");

      console.log(response.data);
    } catch (error) {
      if (error.response.data.message === "Missing parameters") {
        setErroMessage("Please fill in all fields");
      } else if (error.response.status === 409) {
        setErroMessage(
          "This email already has an account , please use another one 🙂 "
        );
      }
      // console.log(error.response);
    }
  };

  return (
    <main className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div>
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <span>S'inscrire à notre newlestter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <input className="submit" value="S'inscrire" type="submit" />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Link className="link" to="/login">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </form>
    </main>
  );
};

export default Signup;
