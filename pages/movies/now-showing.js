import NowShowing from "../../components/NowShowing"

const NowShowingMoviesPage = ({ movieData }) => {

    return (
        <NowShowing movieData={movieData}/>
    );
};

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5000/movie-info/getmovies/now_playing?page=1');
    const data = await response.json();
  
    return {
      props: {
        movieData: data
      },
      revalidate: 80000
    }
}

export default NowShowingMoviesPage;