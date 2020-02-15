const baseUrl = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists";

export async function getArtistAlbum(id) {
    //await porque fetch retorna una promesa
    const response = await fetch(`https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/${id}/albums`)
    const responseJson = await response.json()
    return responseJson

}

export default getArtistAlbum;