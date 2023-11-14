import { useNavigate, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  //   const [pictureFromCloudinary, setPictureFromCloudinary] = useState();
  const [decription, setDecription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
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
      formData.append("condition", condition);
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
      //   setPictureFromCloudinary(response.data.secure_url);

      navigate("/");

      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <div className="container-sold">
      <form onSubmit={handleSubmit}>
        <h1> Vends ton arcticle</h1>
        <div className="picture-sold">
          <label htmlFor="picture-input"> + Choisissez une image</label>
          <input
            style={{ display: "none" }}
            id="picture-input"
            type="file"
            onChange={(event) => {
              // console.log(event);
              setPicture(event.target.files[0]);
            }}
          />
        </div>

        {picture && (
          <img
            style={{ height: "100px" }}
            src={URL.createObjectURL(picture)}
            alt="test"
          />
        )}
        <div className="insertion">
          <input
            className="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            value={decription}
            onChange={(event) => {
              setDecription(event.target.value);
            }}
          ></textarea>
          {/* <input
          type="text"
          placeholder="description"
          value={decription}
          onChange={(event) => {
            setDecription(event.target.value);
          }}
        /> */}
        </div>

        <div className="sold-detail">
          <input
            type="text"
            placeholder="Brand"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Size"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Condition"
            value={condition}
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>

        <div className="sold-price">
          <input
            className="price"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <div className="coche">
            <input type="checkbox" />
            <label>Je suis intéressé(e) par les échanges</label>
          </div>
        </div>

        <div className="validate">
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
