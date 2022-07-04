

import MediaControlCard from "../components/MediaControlCard";
import IconButton from '@mui/material/IconButton';
import { useEffect, useReducer, useState } from 'react';
import { SongModel } from '../SongMoudel';
import { IoMdAddCircleOutline } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom";
import { MyLocation } from "@mui/icons-material";
import { connect } from "react-redux";
import { redurSong } from "../store/reducer";


interface allLocation {
    newSong: SongModel;
    myLocion: Location;
}


const SongsLandingPage: React.FC = (prop: any) => {
    //   const [listSssong, setListSong] = useState<SongModel[]>([{ id: 1, title: "father, king of world", artist: "Abraham Fried", length: 5, price: 65, genre: "POP", img: "01" },
    // { id: 2, title: "Light the fire", artist: "Jacob Shwekey", length: 6, price: 123, genre: "CLASSIC", img: "02" },
    // { id: 3, title: "My little leaf", artist: "Abraham Fried", length: 3, price: 554, genre: "ROCK", img: "03" }])

    const nav = useNavigate();
    const location = useLocation();
    let listSong: SongModel[];
    listSong = prop.myListSing;

    useEffect(() => {
        listSong = prop.myListSing;
        console.log(listSong)
        //    if(myLoction)
        //    {
        //     console.log("true")
        //     console.log(myLoction.newSong)
        //     setListSong(listSong=>[...listSong,    { id: 3, title: "My little leaf", artist: "Abraham Fried", length: 3, price: 554, genre: "ROCK", img: "03" }])


        //     console.log(listSong)
        //    }
        //    }

        // if(myLocion.editSong)
        // setListSong(listSong.filter(oldSong=>oldSong.id!==myLocion.editSong.id))
        // console.log(myLocion.editSong)

        // setListSong([...listSong,myLocion.editSong])

    }, []);
    return (<>

        {listSong.map((singleSong: SongModel) => {

            return (

                <MediaControlCard singleSong={singleSong} key={singleSong.id} />

            )
        })}

        <IconButton onClick={() => { nav("/addSong") }}>


            <IoMdAddCircleOutline size={70} />

        </IconButton>

    </>);
}

const ShowListSong = (state:any) => {
    console.log(state.songReducer.state.listSong)
    return {
        myListSing:state.songReducer.state.listSong
    }
}

export default connect(ShowListSong)(SongsLandingPage);

