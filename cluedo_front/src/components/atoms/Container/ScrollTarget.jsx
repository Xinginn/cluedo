import React, { forwardRef } from "react"

const ScrollTarget = forwardRef((props, scrollTargetRef) => {
  const { children, ...otherProps } = props;
  return (
    <div ref={scrollTargetRef}></div>
  )
})

export default ScrollTarget