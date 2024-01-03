import React,{useEffect, useState} from 'react'
import axios from "axios";

const GenreGrid = () => {
    const [genre,setGenre] = useState([])

    useEffect(()=>{
        // const axios = require('axios');
        axios.get("https://api.jikan.moe/v4/genres/anime").then((res)=>{
          setGenre(res.data.data);
           })
    },[])

  return (
    <ul>
        {genre.map((genre)=><li key={genre.mal_id}>{genre.name}</li>)}
    </ul>
    
  )
}

export default GenreGrid