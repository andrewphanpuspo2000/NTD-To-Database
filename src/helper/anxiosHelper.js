import axios from "axios";

const api = "http://localhost:8000/api/v1/task";
export const postTask = async (taskobj) => {
  try {
    const { data } = await axios.post(api, taskobj);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchTask = async () => {
  try {
    const { data } = await axios.get(api);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const switchTask = async (taskobj) => {
  try {
    const { data } = await axios.patch(api, taskobj);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteTask = async (taskobj) => {
  try {
    const { data } = await axios.delete(api, { data: taskobj });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
