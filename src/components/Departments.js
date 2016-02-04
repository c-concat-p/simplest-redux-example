import React, { PropTypes } from 'react'
import { fetchDept } from '../actions'

export default class Departments extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchDept());
    }

    render() {
        let data = this.props.data;

        let depts = data.departments.length && data.departments.map((dept)=> {
            return <li key={dept.sku}>{dept.name}</li>;
        });

        return depts ? (
            <ul>{depts}</ul>
        ) : (
            <p>loading...</p>
        );
    }
}

/*Departments.propTypes = {

}*/
