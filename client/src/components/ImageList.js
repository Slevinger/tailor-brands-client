import React from "react";
import Card from "./Card";
import { ContentContainer } from "./StyledComponents";
export default ({ page, content }) => {
  return (
    <ContentContainer>
      <div className="container center inline-flex flex-wrap justify-center flex-1">
        {content.slice(page * 6, page * 6 + 6).map((item) => (
          <Card key={item.div} {...item} />
        ))}
      </div>
    </ContentContainer>
  );
};
