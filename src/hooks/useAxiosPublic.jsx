import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://skill-track-for-server.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
