import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Movie {
  title: string;
  id: string;
  poster_path: string;
}

interface MovieState {
  movies?: Movie[];
  isLoading: boolean;
}

const initialState: MovieState = {
  isLoading: false,
};

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    test: state => {
      state.isLoading = null;
    },
    list: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const {list, test} = moviesSlice.actions;

export default moviesSlice.reducer;
