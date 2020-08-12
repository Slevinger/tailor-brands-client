import React from "react";
import { StyledCard } from "./StyledComponents";
export default (props) => {
  const headerImage =
    (props["Header image"] && props["Header image"][0].thumbnails.large.url) ||
    "https://softsmart.co.za/wp-content/uploads/2018/06/image-not-found-1038x576.jpg";

  return (
    <StyledCard>
      <div className="align-center flex flex-col items-center p-4">
        <img
          className="card-image"
          src={headerImage}
          style={{ minHeight: "220px" }}
        />
        <div>
          <div className="pt-2 text-center text-xl text-gray-800">
            {props.Headline}
          </div>
          <div className="pt-2 text-center text-ms text-gray-500">
            {props["Sub-headline"]}
          </div>
        </div>
      </div>
    </StyledCard>
  );
};
