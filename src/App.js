import "./App.css";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt='Giffy logo'
          src='logo.png' />
        </Link>

        <Route component={Home} path="/" />

        <Route component={SearchResults} path="/search/:keyboard" />

        <Route component={Detail} path="/gif/:id" />

        <h1>App</h1>

        <Link href="/gif/panda">Gifs de pandas</Link>
        <Link href="/gif/she-hulk">Gifs de she-hulk</Link>
        <Link href="/gif/bowie">Gifs de bowie</Link>
        <Link href="/gif/snow">Gifs de snow</Link>

        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}
