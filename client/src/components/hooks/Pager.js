import React from "react";
import { StyledPager } from "../StyledComponents";

export default ({ onPageNext, onPagePrev, page, numberOfPages }) => {
  return (
    <StyledPager>
      <button
        onClick={onPagePrev}
        className="border-gray-400 opacity-25 border-solid border px-3 py-1 items-center flex hover:opacity-100"
      >
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.09375 6.46875L7.15625 0.40625C7.30208 0.260417 7.47917 0.1875 7.6875 0.1875C7.89583 0.1875 8.07292 0.260417 8.21875 0.40625L8.90625 1.09375C9.05208 1.23958 9.125 1.41667 9.125 1.625C9.14583 1.83333 9.08333 2.01042 8.9375 2.15625L4.09375 7L8.9375 11.8438C9.08333 11.9896 9.14583 12.1667 9.125 12.375C9.125 12.5833 9.05208 12.7604 8.90625 12.9062L8.21875 13.5938C8.07292 13.7396 7.89583 13.8125 7.6875 13.8125C7.47917 13.8125 7.30208 13.7396 7.15625 13.5938L1.09375 7.53125C0.927083 7.38542 0.84375 7.20833 0.84375 7C0.84375 6.79167 0.927083 6.61458 1.09375 6.46875Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        onClick={() => onPagePrev()}
        className="border-gray-400 opacity-25 text-gray-800 border-solid border px-3 py-1 hover:opacity-100"
      >
        {page - 1 < 0 ? numberOfPages - 1 : page - 1}
      </button>
      <div className="border-gray-400 text-gray-600 border-solid border px-3 py-1">
        {page}
      </div>
      <button
        onClick={() => onPageNext()}
        className="border-gray-400 opacity-25 text-gray-800 border-solid border px-3 py-1 hover:opacity-100"
      >
        {page + 1 > numberOfPages - 1 ? 0 : page + 1}
      </button>
      <button
        onClick={onPageNext}
        className="border-gray-400 opacity-25 border-solid border px-3 py-1 items-center flex hover:opacity-100"
      >
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.90625 7.53125L2.84375 13.5938C2.69792 13.7396 2.52083 13.8125 2.3125 13.8125C2.10417 13.8125 1.92708 13.7396 1.78125 13.5938L1.09375 12.9062C0.947917 12.7604 0.864583 12.5833 0.84375 12.375C0.84375 12.1667 0.916667 11.9896 1.0625 11.8438L5.90625 7L1.0625 2.15625C0.916667 2.01042 0.84375 1.83333 0.84375 1.625C0.864583 1.41667 0.947917 1.23958 1.09375 1.09375L1.78125 0.40625C1.92708 0.260417 2.10417 0.1875 2.3125 0.1875C2.52083 0.1875 2.69792 0.260417 2.84375 0.40625L8.90625 6.46875C9.07292 6.61458 9.15625 6.79167 9.15625 7C9.15625 7.20833 9.07292 7.38542 8.90625 7.53125Z"
            fill="black"
          />
        </svg>
      </button>
    </StyledPager>
  );
};
