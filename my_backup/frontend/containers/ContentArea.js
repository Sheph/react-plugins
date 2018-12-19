import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import contentAreaStyle from '../assets/styles/contentAreaStyle.js';

class ContentArea extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Switch>
                    <Route extact path="/queues" />
                    <Route extact path="/borders" />
                    <Route extact path="/other" />
                    <Route exact path="/" render={() => (<Redirect to="/queues"/>)} />
                    <Redirect to="/" />
                </Switch>
                <div>&nbsp;</div>
            </Paper>
        );
    }
}

ContentArea.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(contentAreaStyle)(ContentArea);
