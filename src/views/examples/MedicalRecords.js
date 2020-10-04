import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./common.css";

// reactstrap components
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import DefaultHeader from "../../components/Headers/DefaultHeader.js";
import AddRecords from "./AddRecord.js";

//import patientData employ from './patientData.json';

class MedicalRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false
    };
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  generatePatientData() {
    let res = [];
    let tableData = employ.data;
    for (var i = 0; i < tableData.length; i++) {
      res.push(
        <tr>
          <th key={tableData[i].medAssistId}>{tableData[i].medAssistId}</th>
          <td key={tableData[i].name}>{tableData[i].name}</td>
          <td key={tableData[i].status}>
            <PatientStatus status={tableData[i].status} />
          </td>
          <td key={tableData[i].gender}>{tableData[i].gender}</td>
          <td key={tableData[i].age}>{tableData[i].age}</td>
          <td key={tableData[i].mobileNumber}>{tableData[i].mobileNumber}</td>
          <td className="text-right">
            <ActionButtons />
          </td>
        </tr>
      );
    }
    return res;
  }

  render() {
    return (
      <>
        <DefaultHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="bg-secondary shadow">
                <CardHeader className="border-0 d-flex">
                  <Col class="col-md-6">
                    <h2 className="mb-0 ">Medical Records</h2>
                  </Col>
                  <Col class="col-md-6">
                    <div>
                      <Button
                        color="primary"
                        type="button"
                        className="float-right"
                      >
                        Fetch Records
                      </Button>
                      <Button
                        color="primary"
                        type="button"
                        className="float-right"
                      >
                        Share
                      </Button>
                      <Button
                        color="primary"
                        type="button"
                        className="float-right"
                        onClick={this.state.togglePop}
                      >
                        + Add Record
                      </Button>
                    </div>
                  </Col>
                </CardHeader>
                <CardBody
                  className="pt-0 pt-md-4"
                  style={{ minHeight: "400px" }}
                >
                  {this.state.seen ? (
                    <AddRecords toggle={this.state.togglePop} />
                  ) : (
                    <div>No Records Found.</div>
                  )}
                </CardBody>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

const ActionButtons = () => (
  <UncontrolledDropdown>
    <DropdownToggle
      className="btn-icon-only text-light"
      href="#pablo"
      role="button"
      size="sm"
      color=""
      onClick={(e) => e.preventDefault()}
    >
      <i className="fas fa-ellipsis-v" />
    </DropdownToggle>
    <DropdownMenu className="dropdown-menu-arrow" right>
      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
        Action
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
        Another action
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
        Something else here
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const PatientStatus = ({ status }) => (
  <Badge color="" className="badge-dot mr-4">
    {status === "pending" && <i className="bg-warning" />}
    {status === "completed" && <i className="bg-success" />}
    {status === "delayed" && <i className="bg-danger" />}
    {status === "on schedule" && <i className="bg-info" />}
    {status}
  </Badge>
);

export default MedicalRecords;
