import Home from "../components/Home";

const HomePage = ({ movieData }) => {
  
  return (
    <Home movieData={movieData} />
  );

}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/movie-info/trending?page=1');
  const data = await response.json();

  return {
    props: {
      movieData: data
    },
    revalidate: 80000
  }
}

export default HomePage;
