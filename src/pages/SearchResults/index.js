import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

function SearchResults ({ params }) {
  // keyword is the promise of the word searched in the form
  const { keyword } = params
  const {loading, gifs} = useGifs({keyword})

  console.log('-')
  
  return <>
    {loading
      ? <Spinner/>
      : <ListOfGifs gifs={gifs}/>
    }
  </>
}

export default React.memo(SearchResults)