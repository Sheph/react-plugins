import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import PluginCard from './PluginCard';
import withStyles from '@material-ui/core/styles/withStyles';
import menuBarStyle from '../assets/styles/menuBarStyle.js';

class MenuBar extends Component {
    render() {
        const { classes, plugins } = this.props;
        return (
            <Paper className={classes.paper}>
                <List className={classes.list}>
                    {plugins.map((plugin) => {
                        return (
                            <React.Fragment key={plugin.basename}>
                                <PluginCard plugin={plugin} />
                            </React.Fragment>
                        );
                    })}
                </List>
            </Paper>
        );
    }
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
    plugins: PropTypes.array.isRequired
};

export default withStyles(menuBarStyle)(MenuBar);
