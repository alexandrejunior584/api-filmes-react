import React from "react";
import { Container, MovieList, Movie } from "./styles";
import { Key } from "../../Config/Key";
import { Link } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = React.useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  React.useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=pt-BR&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  },[])


  return(
    <Container >
      <h1>Filmes</h1>
      <MovieList>
        {movies.map((movie) => (
          <Movie key={movie.id}>
            <Link to={`details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
            <span>{movie.title}</span>
          </Movie>
        ))}
      </MovieList>
    </Container >
  )
}

export default Home;