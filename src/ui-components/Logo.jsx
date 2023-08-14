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
        fontFamily="Ubuntu"
        fontSize="35px"
        fontWeight="500"
        color="#7EEF90"
        lineHeight="24px"
        textAlign="center"
        padding= "0px 3.5px 0px 0px"
        children="israel-banez"
        {...getOverrideProps(overrides, "israel-banez:~$")}
      ></Text>
      <Text
        fontFamily="Ubuntu"
        fontSize="35px"
        fontWeight="500"
        color="#41454E"
        lineHeight="24px"
        textAlign="center"
        padding= "0px 3.5px 0px 0px"
        children=":"
      {...getOverrideProps(overrides, "israel-banez:~$-1")}>
      </Text>
      <Text
        fontFamily="Ubuntu"
        fontSize="35px"
        fontWeight="500"
        color="#73C4FF"
        lineHeight="24px"
        textAlign="center"
        padding= "0px 3.5px 0px 0px"
        children="~"
      {...getOverrideProps(overrides, "israel-banez:~$-2")}>
      </Text>
      <Text
        fontFamily="Ubuntu"
        fontSize="35px"
        fontWeight="500"
        color="#41454E"
        lineHeight="24px"
        textAlign="center"
        children="$"
      {...getOverrideProps(overrides, "israel-banez:~$-3")}>
      </Text>
    </Flex>
  );
}
