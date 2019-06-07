class API {

  getGif = number =>
    fetch(`http://api.giphy.com/v1/gifs/random?q=${number}&api_key=sytH0PbeMCXrff6ySBcJTexa4IP6n9ez&limit=1`)
      .then(res => res.json())
      .then(json => json.data.images.original.url)
} 