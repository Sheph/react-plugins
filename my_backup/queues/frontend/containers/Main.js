import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import mainStyle from '../assets/styles/mainStyle.js';
import ZoneCard from 'acore/containers/ZoneCard';
import {peopleZoneImages} from 'acore/assets';
import {zonesList, reportUpdate, reportReset} from '../actions/queues';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedZones: {}
        };
    }

    componentDidMount() {
        this.timeout = null;
        this.props.onZonesList();
        if (this.props.location.search.length > 0) {
            this.props.onReportUpdate(this.props.location.search);
        } else {
            this.props.onReportReset();
        }
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            if (this.props.location.search.length > 0) {
                this.props.onReportUpdate(this.props.location.search);
            } else {
                this.props.onReportReset();
            }
        }
        if (prevProps.queuesState.zones !== this.props.queuesState.zones) {
            if (!this.timeout) {
                this.timeout = setTimeout(function() {
                    this.timeout = null;
                    this.props.onZonesList();
                }.bind(this), 10000);
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        let zones = {...state.checkedZones};

        for (let guid in zones) {
            if (!(guid in props.queuesState.zones)) {
                delete zones[guid];
            }
        }

        return {...state, checkedZones : zones};
    }

    handleZoneToggle(guid, checked) {
        this.setState(state => {
            let zones = {...state.checkedZones};

            if (checked) {
                zones[guid] = 1;
            } else {
                delete zones[guid];
            }

            return {...state, checkedZones : zones};
        });
    }

    render() {
        const { classes, queuesState } = this.props;
        let reportLink = 'queues?mode=halfhour&objects=' + Object.keys(this.state.checkedZones).join(',');
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        reportLink += '&date=' + dd + '.' + mm + '.' + yyyy;
        return (
            <React.Fragment>
                <Grid container spacing={8} className={classes.grid}>
                    {Object.keys(queuesState.zones).map((guid) => {
                        let zone = queuesState.zones[guid];
                        return (
                            <Grid item key={guid}>
                                <ZoneCard
                                    zoneImage={peopleZoneImages[Math.min(zone.count, 5)]}
                                    zoneText={zone.name}
                                    onChange={(evt) => this.handleZoneToggle(guid, evt.target.checked)}
                                    data-id={guid} />
                            </Grid>
                        );
                    })}
                </Grid>
                <br/>
                <Button variant="contained" disabled={Object.keys(this.state.checkedZones).length === 0} component={Link} to={reportLink}>Build report</Button>
            </React.Fragment>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
    queuesState: PropTypes.object.isRequired,
    onZonesList: PropTypes.func.isRequired,
    onReportUpdate: PropTypes.func.isRequired,
    onReportReset: PropTypes.func.isRequired,
    location: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onZonesList: () => dispatch(zonesList()),
        onReportUpdate: (query) => dispatch(reportUpdate(query)),
        onReportReset: () => dispatch(reportReset())
    };
};

function mapStateToProps(state) {
    return {
        queuesState : state.queues
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(mainStyle)(Main)));
