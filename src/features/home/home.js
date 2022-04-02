import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getHomeViedos = createAsyncThunk(
    "home/getHomeViedos",
    async (dispatch, getState) => {
      return await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLNYkxOF6rcIB3ci6nwNyLYNU6RDOU3YyL&maxResults=50&key=${process.env.REACT_APP_YOUTUBE}`).then(
        (res) => res.json()
      );
    }
  );
const homeSlice = createSlice({
    name:"home",
    initialState:{data:[],status: null},
    reducers:{
       
    },
    extraReducers: {
        [getHomeViedos.pending]: (state, action) => {
          state.status = "loading";
        },
        [getHomeViedos.fulfilled]: (state, action) => {
          state.status = "success";
          state.data = action.payload.items;
          console.log(state.data)
          console.log(state.status)


        },
        [getHomeViedos.rejected]: (state, action) => {
          state.status = "failed";
        },
      },
});
// export const {login} = homeSlice.actions
export default homeSlice.reducer;