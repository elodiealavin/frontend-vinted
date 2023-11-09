import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const num = 1;

  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState();
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);

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
      <div>
        <div className="picture-background">
          <div className="ready">
            <p>Prêts à faire du tri dans vos placards ? </p>
            <button>Commencer à vendre </button>
          </div>
        </div>

        <Link to={`/offer/${num}`}> liens de navigation</Link>

        <article className="card-container">
          {data.offers.map((offer) => {
            return (
              <section key={offer.account}>
                <p>{offer._id}</p>
                {/* <p>{offer.product_name}</p>
                  <p>{offer.product_description}</p>
                  <p>{offer.product_price}</p> */}
              </section>
            );
          })}
        </article>
      </div>
    </main>
  );
};

export default Home;
