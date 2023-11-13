import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      handleToken(response.data.token);
      navigate("/");

      //   console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <main className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>
          <p> Se connecter </p>
        </h3>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input className="online" type="submit" value="S'inscrire " />
        <Link to="/signup"> Pas encore de compte ? Inscris-toi !</Link>
      </form>
    </main>
  );
};

export default Login;
