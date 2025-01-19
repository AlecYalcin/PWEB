"use server";

export async function searchMovies(formData: any) {
  const title = formData.get("title");

  if (!title || title == "") return { Search: [] };

  try {
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=be544378&s=${title}`);

    const jsonRes = await httpRes.json();

    return jsonRes;
  } catch (err) {
    return { error: `Erro na requisição ${err}` };
  }
}
