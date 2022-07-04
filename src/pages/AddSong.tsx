
import { Button, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { SongModel, typeGener } from '../SongMoudel';
import { FormControl } from '@mui/material';
// import { addSong } from './apiSong';
import { useDispatch } from 'react-redux';
import {addSong}from '../store/action'

export default function AddSong() {
    const [newSong, setNewSong] = useState<SongModel>({
        id: 0,
        title: "",
        artist: "",
        length: 0,
        price: 0,
        genre: "",
        img: " "
    })
    const navi = useNavigate();
    const [myImg, setImg] = useState();
const dis=useDispatch();


    const onImageChange = (e: any) => {
        const [file] = e.target.files;
        // console.log(URL.createObjectURL(file));
        // console.log(e.target.files)
        setNewSong({ ...newSong, img: e.target.files[0] })
        setImg(e.target.files[0]);
        // console.log(e.target.files[0])
        // console.log(URL.createObjectURL(e.target.files[0]))

        // console.log(e.target.value);
    };
    const addNewSong = () => {
          
        //    songList.push(newSong)
        
        dis(addSong(newSong))
           navi("/")
        //    navi("/", {state:{newSong:newSong}})
    }
    return (
        <>
            <h2>add song</h2>
          
       
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200, }} >
           

                <TextField id="standard-basic"  label="title of song" variant="standard" onChange={(val) => { setNewSong({ ...newSong, title: val.target.value,id:Date.now() }) }} />
                <TextField id="standard-basic" label="name artist" variant="standard" onChange={(val) => { setNewSong({ ...newSong, artist: val.target.value }) }} />
                <TextField id="standard-basic" label="length of song" type="number" variant="standard" onChange={(val) => { setNewSong({ ...newSong, length: parseFloat(val.target.value) }) }} />
                <TextField id="standard-basic" label="price" variant="standard" onChange={(val) => { setNewSong({ ...newSong, price: parseFloat(val.target.value) }) }} />


                <Select sx={{ color: "rgb(10,108,109)" }} labelId="demo-simple-select-filled-label" value={newSong.genre} onChange={(v) => { setNewSong({ ...newSong, genre: v.target.value }) }}
                >
                    {typeGener.map((item, key) =>
                        <MenuItem sx={{ color: "rgb(10,108,109)" }} key={key} value={item} >{item}</MenuItem>
                    )}
                </Select>
                {/* <MdUploadFile/> */}
                <Button
                    variant="contained"
                    component="label"
                >
                    add image
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={onImageChange}
                    />
                </Button>
                
            
            
                
         
                {myImg && <img alt="not fount" width={"250px"} src={URL.createObjectURL(myImg as unknown as Blob | MediaSource)} />}

</FormControl>
<Button variant="outlined" onClick={addNewSong}>add your song</Button>

                            <BackButton/>
        </>
    )
}

