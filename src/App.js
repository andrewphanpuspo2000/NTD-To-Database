import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import { TaskComponent } from "./Components/TaskComponent";
import { fetchTask } from "./helper/anxiosHelper";
import { useState } from "react";
import { TaskContainer } from "./Components/TaskContainer";
import { useDispatch } from "react-redux";
import { setLists } from "./redux/taskSlice";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col>
            <h3>Task Management</h3>
          </Col>
        </Row>

        <TaskComponent />
        <TaskContainer />
      </Container>
    </div>
  );
}

export default App;
