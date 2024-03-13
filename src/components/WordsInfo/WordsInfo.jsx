import {useState} from 'react'
import { useSelector } from "react-redux"
import './WordsInfo.scss'

const WordsInfo = () => {
    const {infoByWords} = useSelector(state => state.searchWords)
    const [audio, setAudio] = useState(null);

    const playAudio = () => {
        if (audio) {
            audio.play();
        }
    };

    const word = infoByWords?.length !== 0 ? infoByWords[0]?.word : 'Write Words';
    const phonetic = infoByWords?.length !== 0 ? infoByWords[0]?.phonetic : null
    const sourceUrl = infoByWords?.length !== 0 ? infoByWords[0]?.phonetics[0]?.sourceUrl : null;
    const audioUrl = infoByWords.length !== 0 ? infoByWords[0]?.phonetics[0]?.audio : null;
    const activeClazz = infoByWords?.length > 0  ? 'active' : '';

   

    return (
        <>
        <div className="words-wrapper">
        <div className="words-about">
          <h2 className="words">{word}</h2>
          <a href = {sourceUrl} className="phonetic">{phonetic}</a>
        </div>
        <div className={`words-audio  ${activeClazz}`}>
               {audioUrl && 
                            <audio ref={(audioRef) => setAudio(audioRef)} controls style={{ display: 'none' }}>
                                <source src={audioUrl} type="audio/mpeg" />
                            </audio>}
            <button  onClick={playAudio} className="audio-btn">Play</button>
        </div>
        </div>
        </>
    )
}

export default WordsInfo