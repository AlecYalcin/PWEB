import Form from "next/form";

export default function SearchMovie() {
  return (
    <div>
      <Form action="/movies">
        {/* Título */}
        <label htmlFor="title">Título do Filme</label>
        <input id="title" name="title" defaultValue="bagdad" />
        <br />

        {/* TIpo de Obra */}
        <label htmlFor="type">Tipo de Obra</label>
        <select id="type" name="type" defaultValue="movie">
          <option value="movie">Filme</option>
          <option value="series">Série</option>
          <option value="episode">Episódio</option>
        </select>
        <br />

        {/* Ano de Lançamento */}
        <label htmlFor="year">Ano de Lançamento</label>
        <input id="year" name="year" type="number" defaultValue={2000} />
        <br />

        {/* Botõa de Pesquisa */}
        <button type="submit">Pesquisar</button>
      </Form>
    </div>
  );
}
