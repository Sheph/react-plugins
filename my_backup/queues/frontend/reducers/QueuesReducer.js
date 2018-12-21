import {
    QUEUES_ZONES_LISTED,
} from '../actions/queues';

const intialState =
{
    zones: {}
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
    default:
        return state;
    }
}
