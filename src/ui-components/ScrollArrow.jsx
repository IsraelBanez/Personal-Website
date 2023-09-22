/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SAContainer from "./SAContainer";
import { View } from "@aws-amplify/ui-react";
export default function ScrollArrow(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="59px"
      height="69px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ScrollArrow")}
      {...rest}
    >
      <SAContainer
        width="45px"
        height="53px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8px"
        left="7px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SA-Container")}
      ></SAContainer>
    </View>
  );
}
