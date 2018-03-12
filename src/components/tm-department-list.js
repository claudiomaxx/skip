import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDepartments, deleteDepartment } from '../actions';

class DepartmentList extends Component {

    constructor(props) {
        super(props);
        this.renderDepartment = this.renderDepartment.bind(this);
    }

    componentDidMount() {
        this.props.fetchDepartments();
    }

    deleteDepartment(department) {
        this.props.deleteDepartment(department.id, () => {
            this.props.fetchDepartments();
        });
    }

    renderDepartment(department) {
        return (
            <li className="flex-container flex-center" key={department.id}>
                <div className="col-20">
                    <h5>{department.name}</h5>
                </div>
                <div className="col-4 ta-right">
                    <a href="#" className="button--icon" onClick={event => this.deleteDepartment(department)}>
                        <i className="material-icons tx-danger">delete</i>
                    </a>
                </div>
            </li>
        );
    }

    render() {
        const { departmentList } = this.props;

        if (Object.keys(departmentList).length === 0) {
            return (
                <div className="empty-list">
                    No departments yet. Try to create one.

                    <div>
                        <br />
                        <Link to="/department/new" className="btn btn--primary">New department</Link>
                    </div>
                </div>
            );
        }

        return (
            <div className="tm-box">
                <div className="col-24">
                    <h3 className="tm-box--header">
                        <div className="tm-box--title">DEPARTMENT LIST</div>
                        <div className="tm-box--header-buttons">
                            <Link to="/department/new" className="btn btn--primary">New department</Link>
                        </div>
                    </h3>


                    <ul className="list">
                        {_.map(departmentList, this.renderDepartment)}
                    </ul>
                </div>
            </div>
        );
    }

}

function mapStateToProps({ departmentList }) {
    return { departmentList }
}

export default connect(mapStateToProps, { fetchDepartments, deleteDepartment })(DepartmentList);