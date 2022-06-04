import React from "react";
import { Key } from "../../Config/Key";
import { useParams } from "react-router-dom";
import { Div } from "./styles";
import { Link } from "react-router-dom";
const image_path = "https://image.tmdb.org/t/p/w500";

const Details = () => {

  const [details, setDetails] = React.useState([]);
  const {id} = useParams();

  React.useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=pt-BR`)
    .then(response => response.json())
    .then(data => setDetails(data))
  },[])

  return(
    <Div>
      <div>
        <img src={`${image_path}${details.poster_path}`}></img>
      </div>
      <div>
        <span>{details.title}</span>
        <p>{details.overview}</p> 
        <Link to="/"><button>Voltar</button></Link>
      </div>
    </Div>
  )
}

export default Details;