import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  const [pictureFromCloudinary, setPictureFromCloudinary] = useState();
  const [decription, setDecription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [etat, setEtat] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();

  const navigate = useNavigate();
  console.log(token);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password);
    try {
      const formData = new FormData();
      console.log(FormData);
      formData.append("title", title);
      formData.append("description", decription);
      formData.append("bran", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("etat", etat);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setPictureFromCloudinary(response.data.secure_url);

      navigate("/login");

      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Vends ton arcticle</h1>
        <div className="picture-offer">
          <input
            type="file"
            onChange={(event) => {
              // console.log(event);
              setPicture(event.target.files[0]);
            }}
          />
          {pictureFromCloudinary && (
            <img src={pictureFromCloudinary} alt="veste" />
          )}
        </div>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          value={decription}
          onChange={(event) => {
            setDecription(event.target.value);
          }}
        />
        <div>
          <input
            type="text"
            placeholder="brand"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="size"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="color"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="etat"
            value={etat}
            onChange={(event) => {
              setEtat(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="city"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="price"
            placeholder="price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <input type="checkbox" />
        <label>Je suis intéressé(e) par les échanges</label>

        <div className="validate">
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
};

export default Publish;
