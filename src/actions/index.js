import { INCREASE, SET_PRIMARY, FETCH_DEVICES } from '../constants'

export const increaseAction = {
  type: INCREASE
}

export const setPrimary = function (id) {
    return {
        type: SET_PRIMARY,
        id: id
    }
}

export const fetchDevices = function () {
    return {
        type: FETCH_DEVICES
    }
}
