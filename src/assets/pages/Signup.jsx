import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newlestter, setNewlestter] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleNewsletterChange = (event) => {
    const value = event.target.value;
    setNewlestter(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      const response = axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username,
          email,
          password,
          newlestter,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <h2>S'inscrire</h2>
      <input
        type="text"
        placeholder="username"
        onChange={handleUsernameChange}
      />
      <input type="text" placeholder="email" onChange={handleEmailChange} />
      <input
        type="passeword"
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <input type="checkbox" id="checkbox" onChange={handleNewsletterChange} />
      <label>S'inscrire à notre newlestter</label>
      <button>S'inscrire </button>
    </form>
  );
};

export default Signup;
