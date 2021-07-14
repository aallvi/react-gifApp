
    export const getGifs = async (category) => {

        const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=YyoJUQQxkjS0vtKD6tBCySrcSDW278BZ`
        const resp = await fetch(url);
        const {data} = await resp.json()
  
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
  
  
            }
  
        })
        return gifs
      }