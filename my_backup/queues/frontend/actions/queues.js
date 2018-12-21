import {postRequest} from 'acore/action';

const QUEUES_URL = '/queues';

export const QUEUES_ZONES_LISTED = 'QUEUES_ZONES_LISTED';

export function zonesList() {
    const request = postRequest(`${QUEUES_URL}/data`, {});
    return {
        type: QUEUES_ZONES_LISTED,
        payload: request
    };
}
