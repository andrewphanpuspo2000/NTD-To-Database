import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getTaskList, updateData } from "../redux/taskAction";
export const TaskContainer = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.tasks);
  const entryData = taskList.filter((item) => item.type !== "bad");
  const badData = taskList.filter((item) => item.type !== "entry");
  const [ids, setIds] = useState([]);

  useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  const changeType = (taskobj) => {
    if (window.confirm("are you sure to delete?")) {
      dispatch(updateData(taskobj));
    }
  };

  const handleSelect = (e) => {
    const { value, checked } = e.target;
    console.log(checked);
    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((item) => item !== value));
  };

  const handleDelete = () => {
    console.log("handle delete is running");
    ids.length ? dispatch(deleteData(ids)) : console.log("No data selected");
    setIds([]);
  };
  console.log(ids);

  return (
    <Row>
      <Col>
        <h3 className="text-center">Entry List</h3>
        <hr />
        <Table className="table-striped">
          <tbody>
            {entryData.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {" "}
                  <Form.Check value={item._id} onChange={handleSelect} />
                </td>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td>
                  <Button
                    onClick={() => changeType({ _id: item._id, type: "bad" })}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Col>
        <h3 className="text-center">Bad List</h3>
        <hr />
        <Table className="table-striped">
          <tbody>
            {badData.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check value={item._id} onChange={handleSelect} />
                </td>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => changeType({ _id: item._id, type: "entry" })}
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Row>
        <Button onClick={handleDelete}>
          delete <span>{ids.length}</span>
        </Button>
      </Row>
    </Row>
  );
};
