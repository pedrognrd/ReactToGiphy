import React, { useEffect, useState } from "react";
import Gif from "../Gif/Gif";
import getGifs from "../../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState({ loading: false, results: [] });

  // This is a promise, you make a call and wait for some result in return
  useEffect(
    function () {
      setGifs((actualGifs) => (
        { loading: true, results: actualGifs.results }
      ));
      // A call to the API is done with the keyword received by parameter
      getGifs({ keyword }).then((gifs) => {
        setGifs({ loading: false, results: gifs });
      });
    },
    [keyword]
  );

  if (gifs.loading) return <i>Cargando @</i>;

  // Using React is better to trap the map into a div
  return (
    <div>
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
