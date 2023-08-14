/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Logo(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="1px"
      direction="row"
      width="260px"
      height="50px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="5px 0px 5px 0px"
      {...getOverrideProps(overrides, "Logo")}
      {...rest}
    >
      <Text
        fontFamily="Baloo"
        fontSize="35px"
        fontWeight="400"
        color="rgba(65,69,78,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="israel-banez:~$"
        {...getOverrideProps(overrides, "israel-banez:~$")}
      ></Text>
    </Flex>
  );
}
