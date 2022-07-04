import { LineAxisOutlined } from "@mui/icons-material"
import { SongModel } from "../SongMoudel"
import axios from "axios-by-ts";



export const addSong = (mySong: SongModel) => {
    axios ({method:'POST',url:"http://localhost:8080/songs/addSong" ,data:mySong})
    .then((respo)=>
    {
        console.log(respo)
    }).catch((e)=>
    {
        console.log(e)
    })
    
}


