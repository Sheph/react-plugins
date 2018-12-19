import {
    appMinHeight,
    boxShadow
} from './commonStyle.js';

const menuBarStyle = theme => ({
    paper: {
        padding: theme.spacing.unit * 1,
        height: `calc(100vh - ${theme.spacing.unit * 6}px)`,
        minHeight: `${appMinHeight}px`,
        ...boxShadow
    },
    list: {
        paddingLeft: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '0',
        listStyle: 'none',
        position: 'unset'
    }
});

export default menuBarStyle;
