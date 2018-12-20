import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const appMinWidth = 500;
const appMinHeight = 300;
const menuBarMinWidth = 300;

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
    mainTheme
};
