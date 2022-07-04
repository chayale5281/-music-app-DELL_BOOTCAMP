import { useState } from "react";

export interface SongModel {
   
    id: number;
    title: string;
    artist: string;
    length: number;
     price: number;
    genre: string;
    img:string;

}
// export class SongModel {
//     /**
//      *
//      */
//     /**
//      *
//      */
    
//     // constructor(s:SongModel) {
//     //     this.id=s.id;
//     //     this.title=s.title;
//     //     this.artist=s.artist;
//     //     this.length=s.length;
//     //     this.price=s.price;
//     //     this.genre=this.genre;
//     //     this.img=this.img; 
//     // }
//     /**
//      *
//      */
//     constructor(id=22) {
//      this.  id=id
        
//     }
//     id: number ;
//     title!: string;
//     artist: string | undefined;
//     length: number | undefined;
//     price: number | undefined;
//     genre: string | undefined;
//     img: string | undefined;

// }

// export const songList: SongModel[] =
//     [
//         { id: 1, title: "father, king of world", artist: "Abraham Fried", length: 5, price: 65, genre: "POP", img: "01" },
//         { id: 2, title: "Light the fire", artist: "Jacob Shwekey", length: 6, price: 123, genre: "CLASSIC", img: "02" },
//         { id: 3, title: "My little leaf", artist: "Abraham Fried", length: 3, price: 554, genre: "ROCK", img: "03" },
//     ];



export let typeGener: string[] = ["ROCK",  "POP","RAP","CLASSICAL"];

  
    
  

