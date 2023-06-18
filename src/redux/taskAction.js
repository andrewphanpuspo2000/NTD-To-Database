import { toast } from "react-toastify";

import { setLists } from "./taskSlice";
import {
  deleteTask,
  fetchTask,
  postTask,
  switchTask,
} from "../helper/anxiosHelper";

export const getTaskList = () => async (dispatch) => {
  const { status, taskList } = await fetchTask();

  if (status === "success") {
    // setTaskList(taskList);
    dispatch(setLists(taskList));
  }
};

export const addTaskList = (taskObj) => async (dispatch) => {
  try {
    //send data to api
    const response = postTask(taskObj);
    console.log(response, "lkjhgfgh");
    toast.promise(response, {
      pending: "please wait....",
    });
    const { status, message } = await response;
    console.log(status);
    toast[status](message);

    if (status === "success") {
      dispatch(getTaskList());
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateData = (taskObj) => async (dispatch) => {
  const dataPending = switchTask(taskObj);

  toast.promise(dataPending, {
    pending: "still pending....",
  });

  const { status, message } = await dataPending;
  toast[status](message);
  if (status === "success") {
    dispatch(getTaskList());
  }
};
export const deleteData = (taskId) => async (dispatch) => {
  const { status, message } = await deleteTask(taskId);
  toast[status](message);
  if (status === "success") {
    dispatch(getTaskList());
  }
};
