

    // const axios = require('axios');
    axios.get("https://api.jikan.moe/v4/top/anime").then((res)=>{
      setTopAnime(res.data.data);
       })

