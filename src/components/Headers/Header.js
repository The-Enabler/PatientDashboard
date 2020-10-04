import React from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import chat from "../../assets/img/action/Chat-2-512.png";
import notice from "../../assets/img/action/27-512.png";
import calender from "../../assets/img/action/calender.png";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {
      today: new Date(),
      date: today.getDate(),
      month: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ][today.getMonth()],
      day: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ][today.getDay()]
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ today: new Date() }), 1000);
  }

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {!this.props.showPatientStats && (
                /*Doctor Welcome*/
                <Row>
                  <Col xl="8">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle tag="h3" className="text-center">
                              Welcome, Dr. Jessica Jones.
                            </CardTitle>
                          </div>
                        </Row>
                        <Row>
                          <Col>
                            <Clock
                              value={this.state.today}
                              renderSecondHand={false}
                            />
                          </Col>
                          <div className="text-center d-flex m-auto">
                            <Col>
                              <Row tag="h4">Today is {this.state.day}</Row>
                              <Row
                                style={{ fontSize: "50px", fontWeight: "600" }}
                              >
                                {this.state.date} {this.state.month}
                              </Row>
                            </Col>
                          </div>
                          <Col></Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xl="4">
                    <Card
                      className="card-stats mb-4 mb-xl-0"
                      style={{ minHeight: "230px" }}
                    >
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle tag="h3" className="text-center">
                              Quick Actions
                            </CardTitle>
                          </div>
                        </Row>
                        <Row style={{ marginTop: "20px" }}>
                          <Col>
                            <img
                              src={chat}
                              alt="Logo"
                              style={{ width: "60px" }}
                            />
                          </Col>
                          <Col>
                            <img
                              src={calender}
                              alt="Logo"
                              style={{ width: "100px" }}
                            />
                          </Col>
                          <Col>
                            <img
                              src={notice}
                              alt="Logo"
                              style={{ width: "60px" }}
                            />
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              )}
              {this.props.showPatientStats && (
                /* Card stats */
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
                              New Appointments
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">35</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" /> 3.48%
                          </span>{" "}
                          <span className="text-nowrap">Since yesterday</span>
                        </p>
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
                              Pending Patients
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">23</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-danger mr-2">
                            <i className="fas fa-arrow-down" />
                          </span>{" "}
                          <span className="text-nowrap"></span>
                        </p>
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
                              Lab Results
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">19</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                              <i className="fas fa-users" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-warning mr-2">
                            <i className="fas fa-arrow-down" />
                          </span>{" "}
                          <span className="text-nowrap"></span>
                        </p>
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
                              Overdue Activities
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">19</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                              <i className="fas fa-percent" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fas fa-arrow-up" />
                          </span>{" "}
                          <span className="text-nowrap"></span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              )}
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
