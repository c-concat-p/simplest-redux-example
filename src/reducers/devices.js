import { SET_PRIMARY, FETCH_DEVICES } from '../constants'

const initialState = {
    devices: []
};

// Reducer
export default function counter (state = initialState, action) {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case SET_PRIMARY:
      newState.devices = Object.assign([], newState.devices);

      newState.devices.forEach(function (device) {
        device.primary = false;

        if (device.id === action.id) {
            device.primary = true;
        }
      });

      return newState;
    case FETCH_DEVICES:
      return {
        devices: [
            {
                name: 'Gerome\'s iPhone',
                id: 1,
                type: 'mobile',
                number: '505 050 1337',
                primary: true
            }, {
                name: 'Gerome\'s Android',
                id: 2,
                type: 'mobile',
                number: '123 456 7890',
                primary: false
            }, {
                name: 'Gerome\'s Yubikey',
                id: 3,
                type: 'yubikey',
                primary: false
            }
        ]
      };
    default:
      return state
  }
}
