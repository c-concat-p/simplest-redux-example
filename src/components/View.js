import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Departments from './Departments'

class View extends React.Component {
    render() {
        return (
            <Departments data={this.props.data} dispatch={this.props.dispatch} />
        );
    }
}

/*View.propTypes = {

}*/

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
