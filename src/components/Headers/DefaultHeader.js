import React from "react";
import "react-clock/dist/Clock.css";
import sugar from "../../assets/img/action/sugar.png";
import pressure from "../../assets/img/action/pressure.png";
import weight from "../../assets/img/action/weight.png";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class DefaultHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <Row>
                <Col xl="12">
                  <Card className="card-stats mb-4 mb-xl-0 shadow">
                    <CardHeader className="bg-transparent">
                      <Row>
                        <div className="col">
                          <CardTitle tag="h2" className="text-center">
                            Welcome, Miss Jessica.
                          </CardTitle>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col>
                          <Card
                            className="card-stats mb-4 mb-xl-0 shadow"
                            style={{ minHeight: "240px" }}
                          >
                            <CardBody>
                              <Row style={{ margin: "10px" }}>
                                Great Job! You are all up to date. Remember, you
                                can ask us a question any time.
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col>
                          <Card className="card-stats mb-4 mb-xl-0 shadow">
                            <CardHeader tag="h3">Health Feed</CardHeader>
                            <CardBody>
                              <Row style={{ margin: "10px", marginTop: "0" }}>
                                <h3> Tips for you</h3>
                                Your blood pressure is uncontrolled. With you
                                diabetes, this places you at high risk for
                                kidney disease. Please consult your doctor.
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col>
                          <Card
                            className="card-stats mb-4 mb-xl-0 shadow"
                            style={{ minHeight: "240px" }}
                          >
                            <CardHeader tag="h3">Quick Log Actions</CardHeader>
                            <CardBody>
                              <Row style={{ marginTop: "20px" }}>
                                <Col>
                                  <img
                                    src={sugar}
                                    alt="Logo"
                                    style={{ width: "60px" }}
                                  />
                                </Col>
                                <Col>
                                  <img
                                    src={pressure}
                                    alt="Logo"
                                    style={{ width: "60px" }}
                                  />
                                </Col>
                                <Col>
                                  <img
                                    src={weight}
                                    alt="Logo"
                                    style={{ width: "60px" }}
                                  />
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
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

export default DefaultHeader;
