import {configureStore} from '@reduxjs/toolkit'
import searchWords from '../components/searchWords/searchWordsSlice'

const store = configureStore({
    reducer:{
       searchWords
    }
})

export default store