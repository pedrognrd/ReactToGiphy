import React from "react";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <span>{title}</span>
      <img src={url} alt={title} />
    </a>
  );
}
