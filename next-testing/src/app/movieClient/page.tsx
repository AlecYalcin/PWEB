"use client";

import { searchMovies } from "../actions/movieActions";
import Form from "next/form";
import { useState } from "react";

export default function Home() {
  //  Resultados dos filmes
  const [resultMovies, setResultMovies] = useState([]);

  const handleAction = async (formData: any) => {
    // Requisição
    const res = await searchMovies(formData);

    if (res.error) setResultMovies([]);
    else setResultMovies(res.Search);
  };

  return (
    <div>
      <MovieForm handleAction={handleAction} />
      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({ handleAction }: { handleAction: (formData: any) => Promise<void> }) {
  const [searchBar, setSearchBar] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Form action={handleAction}>
      <label htmlFor="title">Título</label>
      <input id="title" name="title" value={searchBar} onChange={(e) => setSearchBar(e.target.value)} />
      <button type="submit" disabled={searchOpen} onSubmit={() => setSearchOpen(true)}>
        Pesquisar
      </button>
    </Form>
  );
}

export function MovieTable({ movies }: { movies: any }) {
  return (
    <div>
      <div>
        {movies.map((m: any) => (
          <div key={m.imdbID}>
            <h2>{m.Title}</h2>
            <h4>{m.Year}</h4>
            <img src={m.Poster} />
            <p>{m.imdbID}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
