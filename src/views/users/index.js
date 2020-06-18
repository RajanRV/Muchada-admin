import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import FA from 'react-fontawesome';
import Header from "components/Headers/PageHeader.js";
import * as dashboardActions from '../index/actions';

class Sellers extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      activeNav: 1
    };
  }

  componentDidMount(){
      // if(this.props.users.count <= 0){
          this.props.getUsers(this.props.login.token);
      // }
    // this.props.getUsers(this.props.login.token);
  }

  render() {
    return (
      <>
        { this.props.login.token ? '' : <Redirect to="/auth/login" /> }
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-12 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Users</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Add User
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Confirmed</th>
                      <th scope="col">Blocked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.users.loading ? 
                        <tr>
                            <td colSpan="4" className="text-cetner">
                                <FA
                                    className="super-crazy-colors"
                                    name="circle-notch"
                                    size="2x"
                                    spin
                                    // style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                /> 
                            </td>
                        </tr>
                    : this.props.users.count > 0 ? 
                    this.props.users.list.map(user => (
                        <tr>
                            <th scope="row">{user.username}</th>
                            <td>{user.email}</td>
                            <td>{user.confirmed? 'Yes' : 'No'}</td>
                            <td>{user.blocked? 'Yes' : 'No  '}</td>
                        </tr>
                    ))
                     : 
                    <tr>
                        <td colSpan="4">
                            No Records Found
                        </td>
                    </tr>
                    }
                    
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  // sellers: state.dashboard.sellers,
  users: state.dashboard.users
})

const mapDispatchToProps = {
  // getSellers : dashboardActions.getSellers,
  getUsers : dashboardActions.getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Sellers);
