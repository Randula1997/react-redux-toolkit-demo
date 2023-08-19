import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from './slices/songSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/movieSlice';
import { reset } from './actions'


const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

console.log(store.getState());

export { store };
export  { reset ,addSong, removeSong, addMovie, removeMovie };
