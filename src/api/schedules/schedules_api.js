import API from "../axios";

export const createSchedule = async (data) => {
  const response = await API.post('/schedules', data);
  return response.data;
};

export const getSchedules = async () => {
  const response = await API.get('/schedules');
  return response.data;
};

export const getSchedule = async (id) => {
  const response = await API.get(`/schedules/${id}`);
  return response.data;
};

export const updateSchedule = async (id, data) => {
  const response = await API.patch(`/schedules/${id}`, data);
  return response.data;
};

export const deleteSchedule = async (id) => {
  const response = await API.delete(`/schedules/${id}`);
  return response.data;
};
