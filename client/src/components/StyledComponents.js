import styled from "styled-components";

export const StyledPager = styled.div.attrs({
  className: " flex justify-center mb-2 ",
})``;

export const StyledApp = styled.div.attrs({
  className: "w-full flex flex-col items-center justify-center min-h-full",
})`
${StyledPager}{
    bottom: 20px;
    position: absolute;
}
  @media(max-width:767px){
    ${StyledPager}{
      visibility:hidden;
    }
  }
}
`;

export const StyledCard = styled.div.attrs({
  className: "max-w-md w-1/3",
})`
  min-width: 330px;
`;

export const ContentContainer = styled.div.attrs({
  className: "container min-w-full flex m-auto justify-center max-h-full ",
})`
  .card-image {
    background-image: url(https://softsmart.co.za/wp-content/uploads/2018/06/image-not-found-1038x576.jpg);
  }
`;
