import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    infoByWords: [],
    infoByWordsStatus:'idle',
    words: '',
    nightMode: false,
}

export const fetchInfoByWords = createAsyncThunk(
    'infoByWords/fetchInfoByWords',
    async(words) => {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
        return res.json()
    }

)

const SearchWordsSlice = createSlice({
    name: 'searchWords',
    initialState,
    reducers: {
         textForInfo:(state,action) => {
            state.words = action.payload
         },
         setNightMode:(state,action) => {
           state.nightMode  = !state.nightMode
         }
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchInfoByWords.pending,(state) => {
        state.infoByWordsStatus = 'loading'
      })
      .addCase(fetchInfoByWords.fulfilled,(state,action) => {
        state.infoByWordsStatus = 'idle'
        state.infoByWords = action.payload;
      })
      .addCase(fetchInfoByWords.rejected,(state) => {
        state.infoByWordsStatus = 'error'
      })
      .addDefaultCase(() => {})

    }
})

const {reducer,actions} = SearchWordsSlice;
export default reducer
export const {
    textForInfo,
    setNightMode
} = actions