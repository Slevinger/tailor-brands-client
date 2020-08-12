import React, { useState, useCallback, useEffect } from "react";
import api from "../../apis/airTable";
import PagerComponent from "./Pager";

export default () => {
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(0);
  useEffect(() => {
    debugger;
    (async () => {
      const { data } = await api.get("/page/" + page);
      setTotalPages(Math.ceil(data.length / 6));
      setContent(data);
    })();
  }, []);

  const onPageNext = useCallback(() => {
    return setPage((page + 1) % totalPages);
  }, [page, totalPages]);

  const onPagePrev = useCallback(() => {
    setPage((page - 1 + totalPages) % totalPages);
  }, [page, totalPages]);

  const Pager = (
    <PagerComponent
      onPageNext={onPageNext}
      onPagePrev={onPagePrev}
      page={page}
      numberOfPages={totalPages}
    />
  );

  return { onPageNext, onPagePrev, page, content, totalPages, Pager };
};
