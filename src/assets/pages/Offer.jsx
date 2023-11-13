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
      <img src={data.product_image.url} alt="" />
      <div>
        <span>{data.product_price} €</span>
        {data.product_details.map((detail) => {
          // console.log(detail);
          const elem = Object.keys(detail);
          // console.log(elem);
          const elems = elem[0];
          // console.log(elems);
          return (
            <p key={elems}>
              {elem} : {detail[elem]}
            </p>
          );
        })}
        <p>{data.product_name}</p>
        <p>{data.product_description}</p>
        {data.owner.account.avatar && (
          <img src={data.owner.account.avatar.secure_url} alt="" />
        )}
        <button>Acheter</button>
      </div>
    </main>
  );
};

export default Offer;
