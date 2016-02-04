import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class View extends React.Component {

}

View.propTypes = {
    render() {
        return (
            <div>JSON.stringify(this.props, null, '  ')</div>
        );
    }
}

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    data: state.data
  }
}

// Connected Component
export default connect(
  mapStateToProps
)(View);
