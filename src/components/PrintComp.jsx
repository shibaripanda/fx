import React from "react"

export const PrintComp = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>{props.props.post.name}</div>
    )
})