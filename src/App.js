import { connect } from 'react-redux'
import MultipleDevices from './components/MultipleDevices'

// Map Redux state to component props
function mapStateToProps (state) {
  console.log(state);
  return {
    devices: state.devices
  }
}

// Connected Component
export default connect(
  mapStateToProps
)(MultipleDevices)
