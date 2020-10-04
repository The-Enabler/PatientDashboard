import React from "react";
import { FormGroup, Form, Input, Row, Col, Button } from "reactstrap";

class MedicalInfo extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
            <Col xs="8">
              <h6 className="heading-small text-muted mb-4">Allergies</h6>
            </Col>
            <Col className="text-right" xs="4"></Col>
          </Row>
          <div className="pl-lg-4">
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Allegies"
                rows="1"
                defaultValue="No"
                type="textarea"
              />
            </FormGroup>
          </div>

          <hr className="my-4" />
          {/* Address */}

          <Row>
            <Col xs="8">
              <h6 className="heading-small text-muted mb-4">
                Current Medications
              </h6>
            </Col>
            <Col className="text-right" xs="4"></Col>
          </Row>
          <div className="pl-lg-4">
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Current Medication"
                rows="1"
                defaultValue="No"
                type="textarea"
              />
            </FormGroup>
          </div>
          <hr className="my-4" />
          {/* Description */}
          <Row>
            <Col xs="8">
              <h6 className="heading-small text-muted mb-4">
                Past Medications
              </h6>
            </Col>
            <Col className="text-right" xs="4"></Col>
          </Row>
          <div className="pl-lg-4">
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Past Medications"
                rows="1"
                defaultValue="No"
                type="textarea"
              />
            </FormGroup>
          </div>
          <hr className="my-4" />
          {/* Description */}
          <Row>
            <Col xs="8">
              <h6 className="heading-small text-muted mb-4">
                Chronic Diseases
              </h6>
            </Col>
            <Col className="text-right" xs="4"></Col>
          </Row>
          <div className="pl-lg-4">
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Chronic Diseases"
                rows="1"
                defaultValue="No"
                type="textarea"
              />
            </FormGroup>
          </div>
          <hr className="my-4" />
          {/* Description */}
          <Row>
            <Col xs="8">
              <h6 className="heading-small text-muted mb-4">Injuries</h6>
            </Col>
            <Col className="text-right" xs="4"></Col>
          </Row>
          <div className="pl-lg-4">
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Injuries"
                rows="1"
                defaultValue="No"
                type="textarea"
              />
            </FormGroup>
          </div>
          <hr className="my-4" />
          {/* Description */}
          <Row>
            <Col xs="8">
              <h6 className="heading-small text-muted mb-4">Surgeries</h6>
            </Col>
            <Col className="text-right" xs="4"></Col>
          </Row>
          <div className="pl-lg-4">
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Surgeries"
                rows="1"
                defaultValue="No"
                type="textarea"
              />
            </FormGroup>
          </div>
        </Form>
      </>
    );
  }
}

export default MedicalInfo;
