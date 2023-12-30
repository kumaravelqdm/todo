import * as React from "react";

export const EyeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 16}
    height={props.height ?? 9.11}
    {...props}
  >
    <path d="M7.996 0a8.3 8.3 0 0 0-7.98 6.042.5.5 0 1 0 .969.249 7.3 7.3 0 0 1 14.031 0 .5.5 0 1 0 .969-.249A8.306 8.306 0 0 0 7.996 0Zm.005 2.667a3.222 3.222 0 1 0 3.222 3.221 3.229 3.229 0 0 0-3.222-3.221Zm0 1A2.222 2.222 0 1 1 5.78 5.888a2.214 2.214 0 0 1 2.221-2.221Z" />
  </svg>
);
