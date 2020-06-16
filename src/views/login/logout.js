import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from './actions';
import { connect } from 'react-redux';
// import auth from '../../core/auth';

class Logout extends Component {
    constructor(props){
        super(props);
        this.props.logoutUser();
    }
    render() {
        return (
            <Redirect to="/auth/login" />
        );
    }
}

// const mapStateToProps = (state) => ({
//     login: state.login
// });
export default connect(null, { logoutUser : actions.logoutUser })(Logout);