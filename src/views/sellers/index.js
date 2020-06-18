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
import * as actions from './actions';

class Sellers extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      activeNav: 1
    };
  }

  componentDidMount(){
    //   if(this.props.sellers.count <= 0){
          this.props.getSellers(this.props.login.token);
    //   }
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
                      <h3 className="mb-0">Sellers</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Add Seller
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.sellers.loading ? 
                        <tr>
                            <td colSpan="4" className="text-cetner">
                                <center><FA
                                    className="super-crazy-colors"
                                    name="circle-notch"
                                    size="2x"
                                    spin
                                    // style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                /> 
                                </center>
                            </td>
                        </tr>
                    : this.props.sellers.list.length > 0 ? 
                    this.props.sellers.list.map(seller => (
                        <tr key={seller.id}>
                            <th scope="row">{seller.username}</th>
                            <td>{seller.email}</td>
                            <td>{seller.seller_detail ? seller.seller_detail.mobile : ' - '}</td>
                            <td>{seller.seller_detail ? seller.seller_detail.rating : ' - '}</td>
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
  sellers: state.sellers
})

const mapDispatchToProps = {
  getSellers : actions.getSellers,
//   getUsers : actions.getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Sellers);
