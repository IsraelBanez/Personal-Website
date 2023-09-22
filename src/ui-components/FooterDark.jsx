/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import FooterContact from "./FooterContact";
import { Flex } from "@aws-amplify/ui-react";
export default function FooterDark(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1536px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="40px 10px 40px 10px"
      backgroundColor="rgba(65,69,78,1)"
      {...getOverrideProps(overrides, "FooterDark")}
      {...rest}
    >
      <FooterContact
        display="flex"
        gap="10px"
        direction="column"
        width="600px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "FooterContact")}
      ></FooterContact>
    </Flex>
  );
}
