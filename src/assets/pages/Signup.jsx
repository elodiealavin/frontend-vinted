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

  // const handleEmailChange = (event) => {
  //   const value = event.target.value;
  //   setEmail(value);
  // };

  // const handlePasswordChange = (event) => {
  //   const value = event.target.value;
  //   setPassword(value);
  // };

  // const handleUsernameChange = (event) => {
  //   const value = event.target.value;
  //   setUsername(value);
  // };

  // const handleNewsletterChange = (event) => {
  //   const value = event.target.value;
  //   setNewlestter(value);
  // };

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
    <main>
      <form onSubmit={handleSubmit}>
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
        <input type="checkbox" id="checkbox" />
        <label>S'inscrire à notre newlestter</label>
        <input type="submit" value="S'inscrire " />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </main>
  );
};

export default Signup;
