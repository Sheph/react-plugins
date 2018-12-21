import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import mainStyle from '../assets/styles/mainStyle.js';
import ZoneCard from 'acore/containers/ZoneCard';
import {peopleZoneImages} from 'acore/assets';
import {zonesList} from '../actions/queues';

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleBuildReport = this.handleBuildReport.bind(this);
    }

    componentDidMount() {
        this.timeout = null;
        this.props.onZonesList();
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.queuesState.zones !== this.props.queuesState.zones) {
            if (!this.timeout) {
                this.timeout = setTimeout(function() {
                    this.timeout = null;
                    this.props.onZonesList();
                }.bind(this), 10000);
            }
        }
    }

    handleBuildReport() {
    }

    render() {
        const { classes, queuesState } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={8} className={classes.grid}>
                    {Object.keys(queuesState.zones).map((guid) => {
                        let zone = queuesState.zones[guid];
                        return (
                            <Grid item key={guid}>
                                <ZoneCard zoneImage={peopleZoneImages[Math.min(zone.count, 5)]} zoneText={zone.name} />
                            </Grid>
                        );
                    })}
                </Grid>
                <br/>
                <Button variant="contained" onClick={this.handleBuildReport}>Build report</Button>
            </React.Fragment>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
    queuesState: PropTypes.object.isRequired,
    onZonesList: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onZonesList: () => {
            dispatch(zonesList());
        }
    };
};

function mapStateToProps(state) {
    return {
        queuesState : state.queues
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(mainStyle)(Main));
