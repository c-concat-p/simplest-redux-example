import React, { PropTypes } from 'react'
import { fetchDept } from '../actions'

export default class Departments extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchDept());
    }

    render() {
        console.log(this.props.data);

        return (
            <ul>
                this.props.data.map(function (dept) {
                    <li>{dept}</li>
                })
            </ul>
        );
    }
}

/*Departments.propTypes = {

}*/
