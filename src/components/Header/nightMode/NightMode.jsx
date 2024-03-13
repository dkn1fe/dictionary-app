import { useDispatch } from 'react-redux';
import { setNightMode } from '../../searchWords/searchWordsSlice';
import { createContext,useContext } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Icon } from '@mui/material';
import './NightMode.scss'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NightMode = (props) => {
    const dispatch = useDispatch()
    const {toggleTheme} = props;

    function onChangeHandler() {
        dispatch(setNightMode())   
        toggleTheme()
    }

    return (
        <>
            <div className='nightmode'>
                <Switch onChange={onChangeHandler} {...label} />
                <Icon>
                    <ModeNightIcon />
                </Icon>
            </div>
        </>
    )
}

export default NightMode