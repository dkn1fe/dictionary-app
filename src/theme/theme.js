import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode:'light',
        link:'#000'
      },
});

const darkTheme = createTheme({
    palette: {
        mode:'dark',
        link:'#fff'
      },
});


export { lightTheme, darkTheme };