class API {

  getGif = phrase => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=sytH0PbeMCXrff6ySBcJTexa4IP6n9ez&limit=1`)
      .then(res => res.json())
      .then(json => json.data[0].images.original.url)
  }

}