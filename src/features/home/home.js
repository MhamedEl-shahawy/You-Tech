import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getHomeViedos = createAsyncThunk(
    "home/getHomeViedos",
    async (dispatch, getState) => {
      return await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=L1bB8eJlVhY&type=video&maxResults=50&key=${process.env.REACT_APP_YOUTUBE}`).then(
        (res) => res.json()
      );
    }
  );
  export const getSearchViedos = createAsyncThunk(
    "searchVideos/getSearchViedos",
     async (dispatch,getState)=>{
        return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${dispatch.topics}&type=video&videoCategoryId=28&key=${process.env.REACT_APP_YOUTUBE}`).then(
            (res) => res.json()
        );
    });  
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
         console.log(state.data ) 
         console.log(state.status)

        },
        [getHomeViedos.rejected]: (state, action) => {
          state.status = "failed";
        },
        [getSearchViedos.pending]: (state, action) => {
          state.status = "loading";
        },
        [getSearchViedos.fulfilled]: (state, action) => {
          
          state.status = "success";
          state.data =  action.payload.items;
        },
        [getSearchViedos.rejected]: (state, action) => {
          state.status = "failed";
        },
      },
});
// export const {login} = homeSlice.actions
export default homeSlice.reducer;