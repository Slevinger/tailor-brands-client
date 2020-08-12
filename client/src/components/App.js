import React from "react";
import { StyledApp } from "./StyledComponents";
import ImageList from "./ImageList";

import usePager from "./hooks/usePager";

export default () => {
  const { page, content, Pager } = usePager();

  if (content.length === 0) {
    return null;
  }
  return (
    <StyledApp>
      <ImageList content={content} page={page} />
      {Pager}
    </StyledApp>
  );
};
