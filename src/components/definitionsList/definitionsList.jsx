import React from 'react';
import {  useSelector } from "react-redux"
import './definitionsList.scss'

const DefinitionsList = () => {
    const { infoByWords } = useSelector(state => state.searchWords);

   
    return (
        <>
            <div className="definition">
                {infoByWords[0]?.meanings?.map(meaning => (
                    <React.Fragment key = {meaning.partOfSpeech}>
                        <div className='definition-name'>
                        <div className="name">{meaning.partOfSpeech}</div>
                        <div className='line'></div>
                        </div>
                        <h3 className="meaning">Meaning</h3>
                        {meaning.definitions.map((definition, index) => (
                            <li className='definition-lists' key={index}>{definition.definition}
                              <p className='example'>{definition?.example?.length === '' ? null : definition?.example }</p>
                            </li>
                        ))}
                        {<div className="synonyms-title"><span className='synonyms'>Synonyms: </span>
                        <span className="synonyms-item">{meaning.synonyms.length !== 0 ?  meaning.synonyms.slice(0,5).join(', ') : 'no synonyms'}</span>
                         </div>}
                    </React.Fragment >
                ))}
            </div>
        </>
    )
}
export default DefinitionsList