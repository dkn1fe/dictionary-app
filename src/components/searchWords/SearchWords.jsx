import { fetchInfoByWords, textForInfo } from './searchWordsSlice'
import { useDispatch, useSelector } from 'react-redux'
import searchimg from '../../assets/searchimg.svg'
import './SearchWords.scss'


const SearchWords = () => {
    const dispatch = useDispatch()
    const { words } = useSelector(state => state.searchWords)

    const onSumbitHandlerForm = (e) => {
        e.preventDefault();
        dispatch(fetchInfoByWords(words))
    }

    const onChangeHandlerInput = (e) => {
        dispatch(textForInfo(e.target.value))
    }

    return (
        <>
            <form onSubmit={(e) => onSumbitHandlerForm(e)}>
                <input onChange={(e) => onChangeHandlerInput(e)} className="search-inp" type='text' />
                <img className='search-img' src={searchimg}></img>
            </form>
        </>
    )
}

export default SearchWords;