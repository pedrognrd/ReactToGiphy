import {useEffect, useState} from "react"
import getGifs from '../services/getGifs'

export function useGifs ({keyword}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    // useEffect is an effect executed every time the component
    // is rendered and the dependencies changes defined in keyword
    useEffect(function () {
    // displaying the spinner
    setLoading(true)
    getGifs({keyword})
        .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        })
    }, [keyword])

    return {loading, gifs}
}