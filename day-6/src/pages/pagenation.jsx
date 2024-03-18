import React from "react";
import { Card } from "../components/card";
import { useGetTodosSingle } from "../service/query/useGetTodosSingle";
import Skeleton from "react-loading-skeleton";

export const Pagenation = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetTodosSingle(page);
  const buttons = React.useMemo(() => {
    return Math.floor(Number(data?.pageCount) / Number(data?.limit));
  }, [data?.pageCount]);
  return (
    <div>
      {isLoading ? (
        <Skeleton height={150} count={4} />
      ) : (
        <div>
          {data.data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
      <div className="flex justify-center gap-1  ">
        {Array(buttons ? buttons : null)
          .fill(buttons)
          .map((item, i) => (
            <button
              onClick={() => setPage(i + 1)}
              key={i}
              className={`px-2 bg-transparent border border-black rounded-sm ${
                page === i + 1 ? "bg-blue-600 text-white" : "bg-transparent"
              }`}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};
