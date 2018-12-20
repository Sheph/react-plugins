import {
    appMinHeight
} from './commonStyle.js';

const contentAreaStyle = theme => ({
    paper: {
        padding: theme.spacing.unit * 1,
        height: `calc(100vh - ${theme.spacing.unit * 6}px)`,
        minHeight: `${appMinHeight}px`
    },
});

export default contentAreaStyle;
