import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import FA from 'react-fontawesome';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sellers
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.props.sellers.loading ? 
                            <FA
                              className="super-crazy-colors"
                              name="circle-notch"
                              size="2x"
                              spin
                              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                            : this.props.sellers.count}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p> */}
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            New users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.props.users.loading ? 
                              <FA
                                className="super-crazy-colors"
                                name="circle-notch"
                                size="2x"
                                spin
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                              />
                              : this.props.users.count}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Categories
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          {this.props.itemCategory.loading ? 
                              <FA
                                className="super-crazy-colors"
                                name="circle-notch"
                                size="2x"
                                spin
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                              />
                              : this.props.itemCategory.count}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Items
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.props.item.loading ? 
                                <FA
                                  className="super-crazy-colors"
                                  name="circle-notch"
                                  size="2x"
                                  spin
                                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                                : this.props.item.count}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
