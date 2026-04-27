import axios from "axios"

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_KEY

export async function GetPhotos(query="random",page=1,per_page=20) {
   let res = await axios.get("https://api.unsplash.com/search/photos",{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
   })
   return res.data
}