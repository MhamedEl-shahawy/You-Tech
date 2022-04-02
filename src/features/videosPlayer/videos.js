import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRelatedViedos = createAsyncThunk(
    "videos/getRelatedViedos",
    async (dispatch, getState) => {
      return await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${dispatch.id}&type=video&maxResults=50&key=${process.env.REACT_APP_YOUTUBE}`).then(
        (res) => res.json()
      );
    }
  );
const videoSlice = createSlice({
    name:"videos",
    initialState:{data:[],status: null},
    reducers:{
       
    },
    extraReducers: {
        [getRelatedViedos.pending]: (state, action) => {
          state.status = "loading";
        },
        [getRelatedViedos.fulfilled]: (state, action) => {
          state.status = "success";
          state.data = action.payload.items;
          console.log(state.data)
          console.log(state.status)


        },
        [getRelatedViedos.rejected]: (state, action) => {
          state.status = "failed";
        },
      },
});
// export const {login} = homeSlice.actions
export default videoSlice.reducer;