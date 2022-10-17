import React from "react";
import "./App.css";
//import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";
import logo from './logo.png'

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
//import Detail from "./pages/Detail";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link href="/">
          <button class="mb-5">
            <img src={logo} alt="Logo" className="Link-root" />
          </button>
        </Link>

        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/searh/:keyword" />
        {/*<Route component={SearchResults} path="/searh/:keyword" />
        <Route component={Detail} path="/gif/:id" />

        <Link href="/gif/daredevil">Gifs de Daredevil</Link>
        <Link href="/gif/she-hulk">Gifs de She-Hulk</Link>
        <Link href="/gif/captain-america">Gifs de Capitán América</Link>
        <Link href="/gif/spider-man">Gifs de Spider-Man</Link>

        <Route component={ListOfGifs} path="/search/:keyword" />*/}
      </section>
    </div>
  );
}
