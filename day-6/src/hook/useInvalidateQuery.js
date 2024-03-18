import React from "react";
import { client } from "../main";

export const useInvalidateQuery = () => {
  const invalidate = (key) => {
    client.invalidateQueries({ queryKey: [...key] });
  };
  return { invalidate };
};
