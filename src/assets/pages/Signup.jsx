import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const response = axios.post(
    "https://lereacteur-vinted-api.herokuapp.com/user/signup"
  );
  console.log(response.data);
  return (
    <>
      <h2>S'inscire</h2>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button>S'inscrire </button>
    </>
  );
};

export default Signup;
