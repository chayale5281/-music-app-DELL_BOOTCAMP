import { SongModel } from "../SongMoudel"

export const addSong = (newSong: SongModel) => {
    return {
        type: "ADD_SONG",
        payload: newSong
    }
}

export const deletSong = (id: number) => {
    return {
        type: "DELETE_SONG",
        payload: id
    }
}

export const editMySong = (editSong: SongModel) => {
    return {
        type: "EDIT_SONG",
        paylaod: editSong
    }
}
