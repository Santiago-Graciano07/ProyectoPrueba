const baseUrl = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev";

export async function  getArtistas () {
    //await porque fetch retorna una promesa
  const response = await fetch('https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists')
  const responseJson = await response.json()
  return responseJson

}

export default getArtistas