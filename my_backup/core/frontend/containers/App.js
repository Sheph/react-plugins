import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {MuiThemeProvider} from '@material-ui/core/styles';
import MenuBar from './MenuBar';
import ContentArea from './ContentArea';
import appStyle from '../assets/styles/appStyle.js';
import {mainTheme} from '../assets/styles/commonStyle.js';
import { pluginsList } from '../actions/plugins';
import {ROOT_URL} from '../acore/action';

class App extends Component {
    componentDidMount() {
        this.props.onPluginsList();
    }

    render() {
        const { classes, plugin_state } = this.props;
        return(
            <MuiThemeProvider theme={mainTheme}>
                <div className={classes.wrapper}>
                    <Grid container spacing={24}>
                        <Grid item xs={2} className={classes.menuBarItem}>
                            <MenuBar plugins={plugin_state.plugins}/>
                        </Grid>
                        <Grid item xs>
                            <ContentArea plugins={plugin_state.plugins}/>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    plugin_state: PropTypes.object.isRequired,
    onPluginsList: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPluginsList: () => {
            dispatch(pluginsList()).then((action) => {
                if (action.error || (process.env.NODE_ENV !== 'production')) {
                    return;
                }
                for (let plugin of action.payload) {
                    var tag = document.createElement('script');
                    tag.async = false;
                    tag.src = ROOT_URL + '/' + plugin.frontend;
                    document.getElementsByTagName('body')[0].appendChild(tag);
                }
            });
        }
    };
};

function mapStateToProps(state) {
    return {
        plugin_state : state.plugin
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(appStyle)(App));
