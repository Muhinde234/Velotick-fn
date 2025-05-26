import API from "../axios";


export const createBus = async (bus) => {
  const response = await API.post("/buses", bus);
  return response.data;
};

export const getBuses = async () => {
  const response = await API.get("/buses");
  return response.data;
};

export const getBus = async (id) => {
  const response = await API.get(`/buses/${id}`);
  return response.data;
};

export const updateBus = async (id, bus) => {
  const response = await API.patch(`/buses/${id}`, bus);
  return response.data;
};

export const deleteBus = async (id) => {
  const response = await API.delete(`/buses/${id}`);
  return response.data;
}


