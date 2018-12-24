import {
    QUEUES_ZONES_LISTED,
    QUEUES_REPORT_RESET,
    QUEUES_REPORT_UPDATED
} from '../actions/queues';

const intialState =
{
    zones: {},
    reports: []
};

export default function(state = intialState, action)
{
    switch (action.type) {
    case QUEUES_ZONES_LISTED: {
        if (action.error) {
            return {...state, zones: {} };
        }

        let newZones = {};
        for (let zone of action.payload.queues) {
            newZones[zone[0]] = { 'name' : zone[1], 'channel' : zone[2], 'count' : zone[3] };
        }

        return {...state, zones: newZones };
    }
    case QUEUES_REPORT_RESET: {
        return {...state, reports: [] };
    }
    case QUEUES_REPORT_UPDATED: {
        if (action.error) {
            return {...state, reports: [] };
        }

        return {...state, reports: action.payload.data };
    }
    default:
        return state;
    }
}
