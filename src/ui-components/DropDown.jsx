/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function DropDown(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="25.46px"
      height="25.46px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
      paths={[
        {
          d: "M1.5 0C1.5 -0.828427 0.828427 -1.5 0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0L1.5 0ZM16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5L16 17.5ZM0 16L-1.5 16C-1.5 16.8284 -0.828427 17.5 3.33067e-16 17.5L0 16ZM16 14.5L0 14.5L0 17.5L16 17.5L16 14.5ZM1.5 16L1.5 0L-1.5 0L-1.5 16L1.5 16Z",
          stroke: "rgba(217,217,217,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 3,
          style: { transform: "translate(0%, 50%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DropDown")}
      {...rest}
    ></Icon>
  );
}
