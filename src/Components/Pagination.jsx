import React from "react";

const Pagination = ({
  children,
  handleOnClickInc,
  handleOnClickDecr,
  disabledPrev,
  disabledNext,
}) => {
  return (
    <div>
      <button
        data-testid="btn"
        disabled={disabledPrev || disabledNext}
        onClick={handleOnClickInc || handleOnClickDecr}
      >
        {children}
      </button>
    </div>
  );
};

export default Pagination;
