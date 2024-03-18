import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetTodosSingle = (page = 1) => {
  return useQuery({
    queryKey: ["todoSingle", page],
    queryFn: () => {
      return request
        .get("/todos", { params: { _limit: 4, _page: page } })
        .then((res) => {
          return {
            data: res.data,
            limit: res.config.params._limit,
            pageCount: res.headers.get("X-Total-Count"),
          };
        });
    },
  });
};
