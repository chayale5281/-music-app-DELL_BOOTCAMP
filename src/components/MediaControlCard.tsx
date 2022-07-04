import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { SongModel } from '../SongMoudel';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardMedia } from '@mui/material';
import {FiEdit} from "react-icons/fi"
import { useDispatch } from 'react-redux';
import {deletSong} from '../store/action'



type Props = {
  singleSong: SongModel,
  
}

const MediaControlCard = ({ singleSong }: Props) => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const deleteSong = (id: number) => {
    dispatch(deletSong(id))
  }

  const editSong=()=>
  {
    navigate("/editSong" ,{state:{singleSong:singleSong}})

   
  }
  return (
    <>

      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {singleSong.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {singleSong.artist}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary" component="div">
              {singleSong.length}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {singleSong.price}
            </Typography> */}
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
         <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`img/${singleSong.img}.jpg`}

          alt="Song album"
        />
        {/* <span onClick={() => deleteSong(singleSong.id)}>
          <MdDelete />
        </span> */}
        <IconButton aria-label="delete" onClick={() => deleteSong(singleSong.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton  onClick={editSong}>
        <FiEdit/>
      </IconButton>

      </Card>



     
    </>

  );
}
export default MediaControlCard;
