import API from "../axios";


export const createBus = async (bus) => {
  try {
    const response = await API.post("/buses", bus);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const getBuses = async () => {
  try {
    const response = await API.get("/buses");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getBus = async (id) => {
  try {
    const response = await API.get(`/buses/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }

}



export const updateBus = async (id, bus) => {
  try {
    const response = await API.patch(`/buses/${id}`, bus);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

