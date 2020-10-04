import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import "./common.css";

class AddRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        preview: "",
        raw: ""
      }
    };
  }

  handleChange = (e) => {
    if (e.target.files.length) {
      this.setState({
        image: {
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        }
      });
    }
  };

  handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };

  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <>
        <div>
          <Row>
            <div className="col">
              <Card className="bg-secondary shadow">
                <CardHeader className="border-0 d-flex">
                  <Col class="col-md-10">
                    <h2 className="mb-0 ">Add Records</h2>
                  </Col>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <div>
                    <label htmlFor="upload-button">
                      {this.state.image.preview ? (
                        <img
                          src={this.state.image.preview}
                          alt="dummy"
                          width="300"
                          height="300"
                        />
                      ) : (
                        <>
                          <span className="fa-stack fa-2x mt-3 mb-2">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fas fa-store fa-stack-1x fa-inverse" />
                          </span>
                          <h5 className="text-center">Upload your photo</h5>
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-button"
                      style={{ display: "none" }}
                      onChange={this.state.handleChange}
                    />
                    <br />
                    <button onClick={this.state.handleUpload}>Upload</button>
                  </div>
                </CardBody>
                <CardFooter className="py-4">
                  <Button color="primary" type="button" className="float-right">
                    Submit Records
                  </Button>
                  <Button
                    color="primary"
                    type="button"
                    className="float-right"
                    onClick={this.handleClick}
                  >
                    Cancel
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default AddRecords;
