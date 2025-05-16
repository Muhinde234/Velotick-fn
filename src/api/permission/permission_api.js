import API from "../axios";

export const createPermission = async (data) => {
  try {
    const response = await API.post("/permission", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getPermission = async () => {
  try {
    const response = await API.get("/permission");
    return response.data;
  } catch (error) {
    console.log(error);
  } 
}

export const getPermissionById = async (id) => {
  try {
    const response = await API.get(`/permission/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  } 

}



