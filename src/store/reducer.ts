import { SongModel } from "../SongMoudel";

export interface redurSong {

    listSong: SongModel[];
}
type Action =
    | { type: "ADD_SONG", payload: SongModel }
    | { type: "DELETE_SONG", payload: number }
    | { type: "EDIT_SONG", payload: SongModel }

const initialization: redurSong =
{
    listSong: [{ id: 1, title: "father, king of world", artist: "Abraham Fried", length: 5, price: 65, genre: "POP", img: "01" },
    { id: 2, title: "Light the fire", artist: "Jacob Shwekey", length: 6, price: 123, genre: "CLASSIC", img: "02" },
    { id: 3, title: "My little leaf", artist: "Abraham Fried", length: 3, price: 554, genre: "ROCK", img: "03" }]
}


export const songReducer = (state: redurSong = initialization, action: Action) => {
    
    switch (action.type) {
        case "ADD_SONG":

            return {
                ...state,
                listSong: [...state.listSong, action.payload]
            }
    
        case "DELETE_SONG":
return (state.listSong.filter((song: SongModel) => song.id !== action.payload))
        case "EDIT_SONG":
return (state.listSong.filter((editSong: SongModel) => editSong.id !== action.payload.id)
    //  state: { listSong: [...state.listSong,action.payload] }
)




        default: return {
    state
}
    }


}