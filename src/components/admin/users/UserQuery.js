import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "./FetchApi";

function useUsers(execute = true) {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await getAllUser();
      return data;
    },
    enabled: execute,
  });
}

export { useUsers };
