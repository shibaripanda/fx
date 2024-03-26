import React from "react"

export const PrintComp = React.forwardRef((props, setPrint, print, ref) => {
  setPrint({...print, status: false})
    return (
      <div ref={ref}>{props.props.name}</div>
    );
});