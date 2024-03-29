/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import MidRegion from "./MidRegion";
import MenuCustom  from "./Menu";
import { Flex } from "@aws-amplify/ui-react";
export default function NavBarHeaderMainDark(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.25)"
      padding="20px 30px 20px 30px"
      backgroundColor="rgba(65,69,78,1)"
      {...getOverrideProps(overrides, "NavBarHeaderMainDark")}
      {...rest}
    >
      <Logo
        display="flex"
        gap="1px"
        direction="row"
        width="260px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="5px 0px 5px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
      <MidRegion
        display="flex"
        gap="20px"
        direction="row"
        width="1036px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 0px 5px 0px"
        {...getOverrideProps(overrides, "Mid Region")}
      ></MidRegion>
      <Flex
        gap="10px"
        direction="row"
        width="100px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 0px 5px 0px"
        {...getOverrideProps(overrides, "Right Region")}
      >
        <MenuCustom
          display="flex"
          gap="5px"
          direction="row"
          width="100px"
          height="35px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="10px"
          padding="5px 0px 5px 0px"
          {...getOverrideProps(overrides, "Menu")}
        ></MenuCustom>
      </Flex>
    </Flex>
  );
}
