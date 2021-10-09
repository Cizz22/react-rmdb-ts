import React from 'react';
import { useParams } from 'react-router-dom'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//compoenent
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors';
//Hook
import { useMovieHook } from '../Hook/useMovieHook';
//Image
import NoImage from '../images/no_image.jpg'


const Movie:React.FC = () => {
   const {movieId} = useParams()

   const {state:movie, loading, error} = useMovieHook(Number(movieId))

   if(loading) return(<Spinner></Spinner>)
   if(error) return(<div>Soemthing wrong</div>)

   console.log(movie)

   return(
   <>
     <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
     <MovieInfo movie={movie}/>
     <MovieInfoBar
     time={movie.runtime}
     budget={movie.budget}
     revenue={movie.revenue}
     />
     <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actors 
          key={actor.credit_id}
          name={actor.name}
          character={actor.character}
          imagesUrl={
            actor.profile_path
            ?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            :NoImage
          }
          />
        ))}
     </Grid>
   </>
   ) 
}

export default Movie;