const pluginCardStyle = theme => ({
    item: {
        position: 'relative',
        display: 'block',
        textDecoration: 'none',
        '&:hover,&:focus,&:visited,&': {
            color: `${theme.palette.text.primary}`
        }
    },
    itemLink: {
        width: 'auto',
        transition: 'all 300ms linear',
        borderRadius: '5px',
        position: 'relative',
        display: 'block',
        padding: '10px 15px',
        backgroundColor: 'transparent',
    },
    itemIcon: {
        width: '24px',
        height: '30px',
        fontSize: '24px',
        lineHeight: '30px',
        float: 'left',
        marginRight: '15px',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    itemText: {
        margin: '0',
        lineHeight: '30px',
        fontSize: '14px',
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
