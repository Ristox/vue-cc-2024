import axios from "axios";

export default  {
  loadJobs: async () => {
    return await axios.get("/api/jobs");
  },
  loadJob: async (id) => {
    return await axios.get(`/api/jobs/${id}`);
  },
  addJob: async (job) => {
    return await axios.post("/api/jobs", job);
  },
  deleteJob: async (id) => {
    return await axios.delete(`/api/jobs/${id}`);
  }
}
