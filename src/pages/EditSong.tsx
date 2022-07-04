
import { Label } from '@mui/icons-material';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { SongModel, typeGener } from '../SongMoudel';
import { editMySong } from '../store/action';

const EditSong = () => {
    const navigation = useNavigate();
    const dis=useDispatch();
    const location = useLocation();
    const myLocion: any = location.state
    const [editSong, seteditSong] = useState<SongModel>({
        id: myLocion.singleSong.id,
        title: myLocion.singleSong.title,
        artist: myLocion.singleSong.artist,
        length: myLocion.singleSong.length,
        price: myLocion.singleSong.price,
        genre: myLocion.singleSong.gener,
        img: " "
    })

    const saveEdutSong = () => {
       dis(editMySong(editSong))
   
        navigation("/", { state: { editSong: editSong } })
    }
    return (
        <>
            <h1>edit song</h1>

            {/* <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            > */}
            <FormControl variant="standard" sx={{ m: 2, minWidth: 200, }} >
                <TextField id="standard-basic"   sx={{ input: { color: 'rgb(236,23,161)' } }} label="title of song" variant="standard" defaultValue={editSong.title} onChange={(val) => { seteditSong({ ...editSong, title: val.target.value}) }} />
                <TextField id="standard-basic"  sx={{ input: { color: 'rgb(236,23,161)' } }} label="name artist" variant="standard" defaultValue={editSong.artist} onChange={(val) => { seteditSong({ ...editSong, artist: val.target.value }) }} />
                <TextField id="standard-basic"  sx={{ input: { color: 'rgb(236,23,161)' } }} label="length of song" type="number" defaultValue={editSong.length} variant="standard" onChange={(val) => { seteditSong({ ...editSong, length: parseFloat(val.target.value) }) }} />
                <TextField id="standard-basic"  sx={{ input: { color: 'rgb(236,23,161)' } }} label="price" variant="standard" defaultValue={editSong.price} onChange={(val) => { seteditSong({ ...editSong, price: parseFloat(val.target.value) }) }} />

            

                <Select sx={{ color: "rgb(10,108,109)" }} labelId="demo-simple-select-filled-label" defaultValue={editSong.genre} value={editSong.genre} onChange={(v) => { seteditSong({ ...editSong, genre: v.target.value }) }}
                >
                    {typeGener.map((item, key) =>
                        <MenuItem sx={{ color: "rgb(10,108,109)" }} key={key} value={item} >{item}</MenuItem>
                    )}
                </Select>

                {/* </Box> */}
                <Button variant="outlined" onClick={saveEdutSong}>update sing</Button>
            </FormControl >
            <BackButton />
        </>

    )
}
export default EditSong;