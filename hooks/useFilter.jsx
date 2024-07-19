import { useState } from "react";

export const useFilter = () => {
  const [query, setQuery] = useState("");

  return query;
};
