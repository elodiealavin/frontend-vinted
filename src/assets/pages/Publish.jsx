import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  const [pictureFromCloudinary, setPictureFromCloudinary] = useState();
  const [decription, setDecription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [etat, setEtat] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useNavigate();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password);
    try {
      const formData = new FormData();
      console.log(FormData);
      formData.apprend("title", title);
      formData.apprend("description", decription);
      formData.apprend("bran", brand);
      formData.apprend("size", size);
      formData.apprend("color", color);
      formData.apprend("etat", etat);
      formData.apprend("city", city);
      formData.apprend("price", price);

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

      navigate("/login");

      //   console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <main>
        <h1> Vends ton arcticle</h1>
        <div className="picture-offer">
          <input type="file" />
        </div>
        <input
          type="text"
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(event) => {
            setDecription(event.target.value);
          }}
        />
        <div>
          <input
            type="text"
            placeholder="brand"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="size"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="color"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="etat"
            onChange={(event) => {
              setEtat(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="city"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="price"
            placeholder="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <input type="checkbox" />
        <label>Je suis intéressé(e) par les échanges</label>

        <div className="validate">
          <input type="text" value="Ajouter" />
        </div>
      </main>
    </div>
  );
};

export default Publish;
