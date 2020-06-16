import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FA from 'react-fontawesome';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import * as actions from './actions';

class Login extends React.Component {
  constructor(props){
    super(props);

    const { token } = this.props.login;

    var redirect = false;
    if(token){
      redirect = true;
    }
    this.state = {
      username : '',
      password: '',
      remember: true,
      redirect
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
    if(this.props.login.token)  
      this.setState({redirect: true})
  }
  render() {
    return (
      <>
        {this.state.redirect || this.props.login.token ? <Redirect to="/admin/index" /> : ''}
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-1">
            <div className="btn-wrapper text-center">
              <h1>Login</h1>  
            </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={this.handleLogin}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="new-password"/>
                  </InputGroup>
                </FormGroup>
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                    value={this.state.remember}
                    onChange={this.handleChange}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div> */}
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    {this.props.login.loading ?
                    <FA
                      className="super-crazy-colors"
                      name="circle-notch"
                      size="2x"
                      spin
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> : 'Sign in' }
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = {
  loginUser : actions.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
