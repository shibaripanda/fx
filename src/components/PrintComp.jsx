import React from "react"

export const PrintComp = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>My cool content here!</div>
    );
});