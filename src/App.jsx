import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux'
import { useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../src/theme/theme'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header'
import SearchWords from './components/searchWords/SearchWords'
import WordsInfo from './components/WordsInfo/WordsInfo'
import DefinitionsList from './components/definitionsList/definitionsList'
import Spiner from './components/Spinner/Spinner'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  const { infoByWordsStatus } = useSelector(state => state.searchWords);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);




  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className='container'>
        <header>
          <Header toggleTheme={toggleTheme} />
        </header>
        <div className='search-words'>
          <SearchWords />
        </div>
        {infoByWordsStatus === 'loading' ? (
          <Spiner />
        ) : (
          <>
            <div className='words-info'>
              <WordsInfo />
            </div>
            <div className='definitions-list'>
              <DefinitionsList />
            </div>
            <footer className='footer'>
              <Footer />
            </footer>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App

