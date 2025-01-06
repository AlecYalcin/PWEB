import dotenv from "dotenv";

// Configuração .env
dotenv.config();

export default async function Home({ searchParams }: { searchParams: any }) {
  const URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY as String}`;

  try {
    const { title = "Shrek", type = "movie", year } = await searchParams;

    // Configurando Query de Busca
    let query = `s=${title}&type=${type}`;
    if (year) query += `&y=${year}`;

    // Configure o .env para aceitar sua API_KEY
    const res = await fetch(`${URL}&${query}`);

    // Dados Recuperados
    const data = await res.json();

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
  } catch (error: any) {
    return (
      <div>
        <h2>Aconteceu um erro durante a execução.</h2>
        <p>{error}</p>
      </div>
    );
  }
}
