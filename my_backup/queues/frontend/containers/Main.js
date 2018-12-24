import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import mainStyle from '../assets/styles/mainStyle.js';
import ZoneCard from 'acore/containers/ZoneCard';
import StackedBarChart from 'acore/containers/StackedBarChart';
import {peopleZoneImages, peopleCountLabels, peopleCountColors} from 'acore/assets';
import {zonesList, reportUpdate, reportReset} from '../actions/queues';
import {tr} from '../translation';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedZones: {}
        };
    }

    componentDidMount() {
        this.zonesTimeout = null;
        this.reportTimeout = null;
        this.props.onZonesList();
        if (this.props.location.search.length > 0) {
            this.props.onReportReset();
            this.props.onReportUpdate(this.props.location.search);
        } else {
            this.props.onReportReset();
        }
    }

    componentWillUnmount() {
        if (this.zonesTimeout) {
            clearTimeout(this.zonesTimeout);
            this.zonesTimeout = null;
        }
        if (this.reportTimeout) {
            clearTimeout(this.reportTimeout);
            this.reportTimeout = null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            if (this.reportTimeout) {
                clearTimeout(this.reportTimeout);
                this.reportTimeout = null;
            }
            if (this.props.location.search.length > 0) {
                this.props.onReportUpdate(this.props.location.search);
            } else {
                this.props.onReportReset();
            }
        } else if (prevProps.queuesState.reports !== this.props.queuesState.reports) {
            if (this.props.location.search.length > 0) {
                if (!this.reportTimeout) {
                    this.reportTimeout = setTimeout(function() {
                        this.reportTimeout = null;
                        this.props.onReportUpdate(this.props.location.search);
                    }.bind(this), 60000);
                }
            }
        }

        if (prevProps.queuesState.zones !== this.props.queuesState.zones) {
            if (!this.zonesTimeout) {
                this.zonesTimeout = setTimeout(function() {
                    this.zonesTimeout = null;
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

        let guids = [];
        for (let guid in queuesState.zones) {
            if (guid in this.state.checkedZones) {
                guids.push(guid);
            }
        }

        let reportLink = 'queues?mode=halfhour&objects=' + guids.join(',');
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
                                    onChange={(evt) => this.handleZoneToggle(guid, evt.target.checked)} />
                            </Grid>
                        );
                    })}
                </Grid>
                <br/>
                <Button variant="contained" disabled={Object.keys(this.state.checkedZones).length === 0} component={Link} to={reportLink}>{tr('Build report')}</Button>
                <br/>
                <br/>
                {queuesState.reports.map((report) => {
                    return (
                        <React.Fragment key={report[0]}>
                            <StackedBarChart data={report[3]}
                                title={report[1]}
                                labels={peopleCountLabels}
                                colors={peopleCountColors} />
                        </React.Fragment>
                    );
                })}
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
