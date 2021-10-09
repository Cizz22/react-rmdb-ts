import { useState, useEffect , useCallback} from 'react';
import API, {Movie, Cast, Crew} from '../API'
import { isPersistedState } from '../helpers';


export type MovieState = Movie & { actors: Cast[] ; directors: Crew[] }


export const useMovieHook = (movieId:number) => {
    const [state, setState] = useState<MovieState>({} as MovieState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        try{
            setLoading(true)
            setError(false)

            const movie = await API.fetchMovie(movieId)
            const credit = await API.fetchCredits(movieId)

            //Get Directors
            const directors = credit.crew.filter(
                (member) => member.job === 'Director'
            );
            
            setState({
                ...movie,
                actors:credit.cast ,
                directors: directors
            })

            setLoading(false)
        }catch(error){
            setError(true)
        }
    },[movieId])
    

    useEffect(() => {
        const sessionState = isPersistedState(movieId.toString())
           if(sessionState){
               setState(sessionState)
               setLoading(false)
               return;
           } 

        fetchData()
    },[movieId,fetchData])

    useEffect(() => {
    sessionStorage.setItem(movieId.toString(),JSON.stringify(state))
    },[state,movieId])

    return {state, loading,error}
}
