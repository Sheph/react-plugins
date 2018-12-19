import {
    appMinWidth,
    menuBarMinWidth
} from './commonStyle.js';

const appStyle = theme => ({
    wrapper : {
        padding: theme.spacing.unit * 2,
        minWidth: `${appMinWidth}px`
    },
    menuBarItem : {
        minWidth: `${menuBarMinWidth}px`,
    },
});

export default appStyle;
