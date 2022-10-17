import React from "react";
import Gif from "../Gif";
import './styles.css'

export default function ListOfGifs({ gifs }) {
  return <div className='ListOfGifs'>
    {
      gifs.map(({id, tittle, url}) => 
        <Gif
          id={id}
          key={id}
          tittle={tittle}
          url={url}
        />
      )
    }
  </div>
}
