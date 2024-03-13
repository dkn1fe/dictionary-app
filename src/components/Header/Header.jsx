import logo from '../../assets/logo.svg'
import NightMode from '../Header/nightMode/NightMode'
import './Header.scss'

const Header = (props) => {
    return(
        <>
        <div className="header-nav">
            <img src = {logo}></img>
            <NightMode {...props}/>
        </div>
        </>
    )
}

export default Header