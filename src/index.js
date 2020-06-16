import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import AdminLayout from "containers/Admin.js";
import AuthLayout from "containers/Auth.js";

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);