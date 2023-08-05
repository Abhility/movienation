import NowShowing from "../../components/NowShowing"

const NowShowingMoviesPage = ({ movieData }) => {

    return (
        <NowShowing movieData={movieData}/>
    );
};

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie-info/getmovies/now_playing?page=1`);
    const data = await response.json();
  
    return {
      props: {
        movieData: data
      },
      revalidate: 80000
    }
}

export default NowShowingMoviesPage;