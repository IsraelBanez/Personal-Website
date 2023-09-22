/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Exit(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="30px"
      height="30px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Exit")}
      {...rest}
    >
      <View
        width="30px"
        height="3px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 1.5px - -10.5px)"
        left="calc(50% - 15px - -3px)"
        transformOrigin="top left"
        transform="rotate(-45deg)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        width="30px"
        height="3px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 1.5px - 10.5px)"
        left="calc(50% - 15px - -5px)"
        transformOrigin="top left"
        transform="rotate(45deg)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
    </View>
  );
}
