import {useSelector} from 'react-redux'
import { useTheme } from '@emotion/react';
import Link from '@mui/material/Link';
import './Footer.scss'

const Footer = () => {
    const {infoByWords} = useSelector(state => state.searchWords)
    const theme = useTheme()
    let activeClazz = infoByWords?.length > 0  ? 'active' : '';
    return (
          <>
             <div className={`footer-line ${activeClazz}`}></div>
             <div className={`source-link ${activeClazz}`}>Source <Link sx = {{color:theme.palette.link}} href = {infoByWords.length !== 0 ? infoByWords[0]?.sourceUrls[0] : null}>{infoByWords.length !== 0 ? infoByWords[0]?.sourceUrls[0] : null}</Link></div>
          </>
    )
}

export default Footer;