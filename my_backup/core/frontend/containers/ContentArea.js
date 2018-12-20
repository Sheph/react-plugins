import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import contentAreaStyle from '../assets/styles/contentAreaStyle.js';

class ContentArea extends Component {
    render() {
        const { classes, plugins } = this.props;
        let redir;
        if (plugins.length > 0) {
            redir = (
                <React.Fragment>
                    <Route exact path="/" render={() => (<Redirect to={'/' + plugins[0].basename}/>)} />
                    <Redirect to={'/' + plugins[0].basename} />
                </React.Fragment>
            );
        }
        return (
            <Paper className={classes.paper}>
                <Switch>
                    {plugins.map((plugin) => {
                        return (
                            <Route path={'/' + plugin.basename} key={plugin.basename} component={plugin.component} />
                        );
                    })}
                    {redir}
                </Switch>
            </Paper>
        );
    }
}

ContentArea.propTypes = {
    classes: PropTypes.object.isRequired,
    plugins: PropTypes.array.isRequired
};

export default withStyles(contentAreaStyle)(ContentArea);
