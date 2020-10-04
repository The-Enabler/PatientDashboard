import React from "react";
import { FormGroup, Form, Input, Row, Col } from "reactstrap";

class PersonalInfo extends React.Component {
  render() {
    return (
      <>
        <Form>
          <h6 className="heading-small text-muted mb-4">User information</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Username
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="lucky.jesse"
                    id="input-username"
                    placeholder="Username"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-email">
                    Email address
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-email"
                    placeholder="jesse@example.com"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    First name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="Lucky"
                    id="input-first-name"
                    placeholder="First name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-last-name"
                  >
                    Last name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="Jesse"
                    id="input-last-name"
                    placeholder="Last name"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          {/* Address */}
          <h6 className="heading-small text-muted mb-4">Other information</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-address">
                    Gender
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="Male"
                    id="input-address"
                    placeholder="Home Address"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-address">
                    Blood Group
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="AB+"
                    id="input-address"
                    placeholder="Home Address"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-address">
                    Date of Birth
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="06-03-1998"
                    id="input-address"
                    placeholder="Home Address"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-city">
                    Height
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="5 ft 6 in"
                    id="input-city"
                    placeholder="City"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-country">
                    Weight
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="65 kgs"
                    id="input-country"
                    placeholder="Country"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-country">
                    Location
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="Aurangabad"
                    id="input-postal-code"
                    placeholder="Location"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          {/* Description */}
          <h6 className="heading-small text-muted mb-4">Emergency Contact</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    Name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="Karan"
                    id="input-first-name"
                    placeholder="Name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-last-name"
                  >
                    Contact
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="987654321"
                    id="input-last-name"
                    placeholder="Contact"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </Form>
      </>
    );
  }
}

export default PersonalInfo;
