const pluginCardStyle = theme => ({
    item: {
        textDecoration: 'none',
        '&:hover,&:focus,&:visited,&': {
            color: `${theme.palette.text.primary}`
        }
    },
    itemLink: {
        backgroundColor: `${theme.palette.action.selected}`,
        transition: 'all 300ms linear',
        borderRadius: '5px',
    },
    itemIcon: {
    },
    itemText: {
        margin: '-25px',
    },
    selected: {
        backgroundColor: `${theme.palette.primary.light}`,
        boxShadow: `0 12px 20px -10px ${theme.palette.primary.main}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px ${theme.palette.primary.main}`,
        '&:hover': {
            backgroundColor: `${theme.palette.primary.light}`,
            boxShadow: `0 12px 20px -10px ${theme.palette.primary.main}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px ${theme.palette.primary.main}`,
        }
    },
});

export default pluginCardStyle;
