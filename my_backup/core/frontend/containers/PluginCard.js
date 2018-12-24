import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import pluginCardStyle from '../assets/styles/pluginCardStyle.js';
import {ROOT_URL} from '../acore/action';

class PluginCard extends Component {
    activeRoute(routeName)
    {
        return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }

    render() {
        const { classes, plugin } = this.props;
        let itemLinkClasses = [classes.itemLink];
        if (this.activeRoute(plugin.basename)) {
            itemLinkClasses.push(classes.selected);
        }
        return (
            <NavLink to={'/' + plugin.basename} className={classes.item}>
                <ListItem button className={itemLinkClasses.join(' ')} >
                    <ListItemIcon className={classes.itemIcon}>
                        <img src={ROOT_URL + '/' + plugin.icon} alt='' />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="caption">{plugin.caption}</Typography>}
                        className={classes.itemText}
                        disableTypography />
                </ListItem>
            </NavLink>
        );
    }
}

PluginCard.propTypes = {
    classes: PropTypes.object.isRequired,
    plugin: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withStyles(pluginCardStyle)(withRouter(PluginCard));
