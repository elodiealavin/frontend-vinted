import { Link } from "react-router-dom";

const Home = () => {
  const num = 3;
  return (
    <main>
      <h1>Home Page</h1>
      <Link to={`/offer/${num}`}> liens de navigation</Link>
    </main>
  );
};

export default Home;
