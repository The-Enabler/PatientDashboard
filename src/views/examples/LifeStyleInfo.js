import React from "react";
import { FormGroup, Form, Input, Row, Col } from "reactstrap";

class LifeStyleInfo extends React.Component {
  render() {
    return (
      <>
        <Form>
          <h6 className="heading-small text-muted mb-4">
            Lifestyle information
          </h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Smoking Habits
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="I don't smoke"
                    id="input-username"
                    placeholder="Username"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-email">
                    Alcohol Consumption
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-email"
                    defaultValue="Non-drinker"
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
                    Activity Level
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="Sedentary (Low)"
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
                    Food Preference
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="Non-vegetarian"
                    id="input-last-name"
                    placeholder="Last name"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-last-name"
                  >
                    Occupation
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue="IT Professional"
                    id="input-last-name"
                    placeholder="Last name"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
        </Form>
      </>
    );
  }
}

export default LifeStyleInfo;
