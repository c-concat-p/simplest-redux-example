import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { setPrimary, fetchDevices } from '../actions/Actions'

// React component
class MultipleDevices extends React.Component {
  _onSelectPrimary (id) {
      this.props.dispatch(setPrimary(id));
  }

  componentWillMount() {
    this.props.dispatch(fetchDevices())
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
  }

  render () {
    const self = this
    const { devices } = this.props;

    let items = devices.map(function (device) {
      return (
        <li key={device.id}>
          {device.name}
          <input type="radio"
                 checked={device.primary}
                 onChange={self._onSelectPrimary.bind(self, device.id)} />
        </li>
      )
    })

    return (
        <ul>{items}</ul>
    );
  }
}

MultipleDevices.propTypes = {
  devices: PropTypes.array.isRequired
}

export default MultipleDevices;
