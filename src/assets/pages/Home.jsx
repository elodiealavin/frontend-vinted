import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = ({ token }) => {
  // const num = 1;

  const params = useParams();
  const id = params.id;
  console.log(params);

  const [data, setData] = useState();
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  // const navigate = useNavigate();
  // console.log(token);

  // const redirection = () => {
  //   navigate("/offer/publish");
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);

        // navigate("/");
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

            <Link to="/offer/publish">
              <button>Commencer à vendre </button>
            </Link>
          </div>
        </div>

        <article className="card-container">
          {data.offers.map((offer) => {
            return (
              <section key={offer._id}>
                <Link to={`/offer/${offer._id}`}>
                  <div className="avatar-profil">
                    {offer.owner.account.avatar && (
                      <img
                        className="picture-profil"
                        src={offer.owner.account.avatar.secure_url}
                        alt=""
                      />
                    )}
                    <span>{offer.owner.account.username}</span>
                  </div>

                  <div className="pictures-offers">
                    <img
                      className="picture-offer"
                      src={offer.product_image.url}
                      alt=""
                    />
                  </div>

                  <div className="text-offer">
                    <span className="price-offer">{offer.product_price} €</span>
                    <span>{offer.product_details[1].TAILLE}</span>
                    <span>{offer.product_details[0].MARQUE}</span>
                  </div>
                </Link>
              </section>
            );
          })}
        </article>
      </div>
    </main>
  );
};

export default Home;
