import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axios(
        `https://skill-track-for-server.vercel.app/user/${user?.email}`
      );
      return data.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
