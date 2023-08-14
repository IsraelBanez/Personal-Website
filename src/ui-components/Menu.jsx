/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Menu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="row"
      width="100px"
      height="35px"
      justifyContent="flex-end"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="5px 0px 5px 0px"
      {...getOverrideProps(overrides, "Menu")}
      {...rest}
    >
      <Text
        fontFamily="Ubuntu Mono"
        fontSize="35px"
        fontWeight="700"
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
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ls"
        {...getOverrideProps(overrides, "ls")}
      ></Text>
    </Flex>
  );
}
