import React, {useEffect, useState} from "react"
import { Link, useLocation } from "wouter";
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'

const POPULAR_GIFS = ["Captain America", "Daredevil", "She-hulk", "Spider-Man" ]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    // <----------------------
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
  
    // useEffect is an effect executed every time the component
    // is rendered and the dependencies changes defined in keyword
    useEffect(function () {
      // displaying the spinner
      setLoading(true)
      getGifs({keyword: 'Rick'})
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
        })
    }, [keyword])
    
    // <----------------------
    
    const handleSubmit = evt => {
        // prevent the default behaviour to happen
        // useful to check the steps of a behaviour
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    
    return (
        <>
            {/* onSubmit is the ideal use instead on a 
            onClick in a button inside the form*/}
            <form onSubmit={handleSubmit} class="mb-5">
                <input placeholder="Search a gif here" onChange={handleChange} 
                type='text' value={keyword}/>
                <button type='submit'>Search</button>
            </form>

            <h3 className="App-title">Last Search Made</h3>
            <ListOfGifs gifs={gifs}/>

            <h3 className="App-title">The most popular gifs</h3>
            <ul>
            {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        Gifs de {popularGif}
                    </Link>
                </li>
            ))}
            </ul>
        </>
    )
}