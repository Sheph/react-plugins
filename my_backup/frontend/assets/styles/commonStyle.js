import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const appMinWidth = 500;
const appMinHeight = 300;
const menuBarMinWidth = 300;

const boxShadow = {
    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};

const mainTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    },
    typography: {
        useNextVariants: true,
    },
});

export {
    appMinWidth,
    appMinHeight,
    menuBarMinWidth,
    boxShadow,
    mainTheme
};
