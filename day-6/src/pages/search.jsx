import React from "react";
import { useGetTodo } from "../service/query/useGetTodo";
import { Card } from "../components/card";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  const [value, setValue] = React.useState("");
  const { data, isLoading } = useGetTodo(value);
  return (
    <div className="container pt-5">
      <div className="mx-auto w-[350px]">
        <input
          className="w-[400px] bg-transparent px-[10px] border-[5px] border-purple-800 focus:border-blue-500 hover:border-blue-500  outline-none py-[10px] text-xl font-semibold text-cyan-900 rounded-[33px] "
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
      </div>
      <Link to="/">⬅️</Link>
      <div className="h-[500px] overflow-y-scroll">
        {data?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
