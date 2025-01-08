import From from "next/form";
import dotenv from "dotenv";

// Configuração .env
dotenv.config();

export default async function Home({ searchParams }: { searchParams: any }) {
  const URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY as String}`;

  const { title, type, year } = await searchParams;

  if (!title && !type && !year) return <div></div>;

  // Configurando Query de Busca
  let query = `s=${title}&type=${type}`;
  if (year) query += `&y=${year}`;

  // Configure o .env para aceitar sua API_KEY
  const res = await fetch(`${URL}&${query}`);

  // ERRO: Caso a requisição não dê certo.
  if (res.status != 200) {
    return (
      <div>
        <p>Aconteceu um erro ao retornar os resultos.</p>
      </div>
    );
  }

  // Dados Recuperados
  const data = await res.json();

  // ERRO: Caso a pesquisa não retorne nada.
  if (data.Search === undefined)
    return (
      <div>
        <p>A pesquisa não retornou nada.</p>
      </div>
    );

  return (
    <div>
      <div>
        {data.Search.map((m: any) => (
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
