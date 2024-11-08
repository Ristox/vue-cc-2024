import axios from "axios";

export default  {
  loadJobs: async () => {
    return axios.get("/api/jobs");
  },
  loadJob: async (id) => {
    return axios.get(`/api/jobs/${id}`);
  }
}
