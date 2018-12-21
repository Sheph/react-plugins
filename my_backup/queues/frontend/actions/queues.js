import {postRequest} from 'acore/action';

const QUEUES_URL = '/queues';

export const QUEUES_ZONES_LISTED = 'QUEUES_ZONES_LISTED';
export const QUEUES_REPORT_UPDATED = 'QUEUES_REPORT_UPDATED';
export const QUEUES_REPORT_RESET = 'QUEUES_REPORT_RESET';

export function zonesList() {
    const request = postRequest(`${QUEUES_URL}/data`, {});
    return {
        type: QUEUES_ZONES_LISTED,
        payload: request
    };
}

export function reportUpdate(query) {
    const request = postRequest(`${QUEUES_URL}/chart-data${query}`, {});
    return {
        type: QUEUES_REPORT_UPDATED,
        payload: request
    };
}

export function reportReset() {
    return {
        type: QUEUES_REPORT_RESET,
        payload: null
    };
}
