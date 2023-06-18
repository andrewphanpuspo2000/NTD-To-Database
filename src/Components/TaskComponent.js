import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTaskList } from "../redux/taskAction";

export const TaskComponent = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(addTaskList(form));
  };

  return (
    <Form className="border p-2 bg-light rounded" onSubmit={handleOnSubmit}>
      <Row>
        <Col md="6">
          <Form.Control
            placeholder="Input activity"
            name="task"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            placeholder="Input hour"
            name="hour"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="4">
          <Button type="submit">add</Button>
        </Col>
      </Row>
    </Form>
  );
};
