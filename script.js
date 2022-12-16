(function () {
    // VanillaJS here
  
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "74be8856e1msh3cf53506b255045p1a2928jsn768ee6614831",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
      }
    };
  
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  })();
  