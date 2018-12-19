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

class App extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        var plugins = [
            { 'basename' : 'queues', 'caption' : 'Queue analytics', 'icon' : 'queues/static/icon.png', 'component' : Grid },
            { 'basename' : 'borders', 'caption' : 'Boarders and stuff', 'icon' : 'borders/static/icon.png', 'component' : Grid },
            { 'basename' : 'other', 'caption' : 'Some other stuff long', 'icon' : 'other/static/icon.png', 'component' : Grid },
        ];
        //plugins = [];
        return(
            <MuiThemeProvider theme={mainTheme}>
                <div className={classes.wrapper}>
                    <Grid container spacing={24}>
                        <Grid item xs={2} className={classes.menuBarItem}>
                            <MenuBar plugins={plugins}/>
                        </Grid>
                        <Grid item xs>
                            <ContentArea plugins={plugins}/>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(appStyle)(App));
