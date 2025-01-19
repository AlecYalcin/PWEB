export async function GET(request: any) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title");

  try {
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=be544378&s=${title}`);
    const jsonRes = await httpRes.json();
    return Response.json({ ...jsonRes });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error });
  }
}
