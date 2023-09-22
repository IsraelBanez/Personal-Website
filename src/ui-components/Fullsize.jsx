/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Fullsize(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="20px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Fullsize")}
      {...rest}
    >
      <View
        width="23px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-7.5%"
        bottom="-7.5%"
        left="-7.5%"
        right="-7.5%"
        border="3px SOLID rgba(217,217,217,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Fullsize20494")}
      ></View>
    </View>
  );
}
