import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetTodo = (value) => {
  return useQuery({
    queryKey: ["todo", value],
    queryFn: () =>
      request
        .get("/todos", { params: { title_like: value } })
        .then((res) => res.data),
  });
};
