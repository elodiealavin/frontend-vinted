import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const params = useParams();
  const id = params.id;
  // console.log(id);

  const [data, setData] = useState();
  // console.log("ici =>", data);
  // console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("test");
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <div className="offer-container">
        <img src={data.product_image.url} alt="" />
        <div className="offer-description">
          <span className="offer-product-price">{data.product_price} €</span>
          {data.product_details.map((detail) => {
            // console.log(detail);
            const elem = Object.keys(detail);
            // console.log(elem);
            const elems = elem[0];
            // console.log(elems);
            return (
              <div className="offer-map">
                <>
                  <span className="elem-offer" key={elems}>
                    {elem} :
                  </span>
                  <span className="elem-detail">{detail[elem]}</span>
                </>
              </div>
            );
          })}
          <div className="description-user">
            <p className="offer-title">{data.product_name}</p>
            <div className="user-offer">
              <p className="offer-detail">{data.product_description}</p>
              {data.owner.account.avatar && (
                <img src={data.owner.account.avatar.secure_url} alt="" />
              )}
              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <button className="offer-sold">Acheter</button>
        </div>
      </div>
    </main>
  );
};

export default Offer;
