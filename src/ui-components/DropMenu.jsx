/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import DropSlot from "./DropSlot";
import { Flex } from "@aws-amplify/ui-react";
export default function DropMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="450px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(65,69,78,1)"
      {...getOverrideProps(overrides, "DropMenu")}
      {...rest}
    >
      <DropSlot
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(65,69,78,1)"
        {...getOverrideProps(overrides, "Drop-Slot217343")}
      ></DropSlot>
      <DropSlot
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Drop-Slot217345")}
      ></DropSlot>
    </Flex>
  );
}
