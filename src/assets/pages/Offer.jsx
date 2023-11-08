import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  console.log(id);

  return <main>Je suis la page offre</main>;
};

export default Offer;
