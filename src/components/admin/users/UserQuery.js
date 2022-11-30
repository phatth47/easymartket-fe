import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "./FetchApi";

function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await getAllUser();
      return data;
    },
  });
}

export { useUsers };
