import {useState, useEffect} from 'react';

//API
import API, {Movie} from '../API'

import { isPersistedState } from '../helpers';

const initialState = {
    page:0,
    results:[] as Movie[],
    total_pages:0,
    total_result:0
}


export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);

    const fetchMovies = async (page:number, seachTerm:string) => {
        try {
            setError(false);
            setLoading(true)
            const movies = await API.fetchMovies(seachTerm, page)

            setState(prev => (
                {
                    ...movies, 
                    results: 
                        page > 1 ? [...prev.results, ...movies.results]:[...movies.results]
                }
            ))

          
        } catch (error) {
            setError(true)
        }

        setLoading(false)
    }

    //mount render and search
    useEffect(() => {
        if(!searchTerm){
            const sessionState = isPersistedState('homeState');

            if(sessionState){
                setState(sessionState)
                return;
            }
        }

        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    useEffect(() => {
        if(!isLoadMore) return
        fetchMovies(state.page + 1, searchTerm)
        setIsLoadMore(false)
    }, [isLoadMore, state, searchTerm])
    
    useEffect(() => {
        if(!searchTerm){
            sessionStorage.setItem('homeState', JSON.stringify(state))
        }
    },[searchTerm, state])

    return {state, loading, error, setSearchTerm, searchTerm, setIsLoadMore}
}