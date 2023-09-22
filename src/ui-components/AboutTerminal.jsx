/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Title from "./Title";
import Add from "./Add";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Drop from "./Drop";
import Resize from "./Resize";
import Fullsize from "./Fullsize";
import Exit from "./Exit";
export default function AboutTerminal(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="77%"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="15px"
      padding="10px 0px 0px 0px"
      backgroundColor="rgba(50,53,60,1)"
      {...getOverrideProps(overrides, "AboutTerminal")}
      {...rest}
    >
      <Flex
        gap="828px"
        direction="row"
        width="unset"
        height="94px"
        justifyContent="flex-start"
        alignItems="flex-end"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Terminal-Header")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title-Container")}
        >
          <Title
            width="371px"
            height="82px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title")}
          ></Title>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="28px 20px 28px 20px"
            {...getOverrideProps(overrides, "Expand-Option")}
          >
            <Add
              width="25px"
              height="25px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Add")}
            ></Add>
            <Icon
              width="38px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 1, height: 38 }}
              paths={[
                {
                  d: "M0 -0.5C-0.276142 -0.5 -0.5 -0.276142 -0.5 0C-0.5 0.276142 -0.276142 0.5 0 0.5L0 -0.5ZM38 0.5C38.2761 0.5 38.5 0.276142 38.5 0C38.5 -0.276142 38.2761 -0.5 38 -0.5L38 0.5ZM0 0.5L38 0.5L38 -0.5L0 -0.5L0 0.5Z",
                  stroke: "rgba(217,217,217,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Line 2")}
            ></Icon>
            <Drop
            
              {...getOverrideProps(overrides, "Drop-Down")}
            ></Drop>
          </Flex>
        </Flex>
        <Flex
          gap="45px"
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
          {...getOverrideProps(overrides, "Options-Container")}
        >
          <Resize
            width="30px"
            height="3px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Resize")}
          ></Resize>
          <Fullsize
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Fullsize")}
          ></Fullsize>
          <Exit
            width="30px"
            height="30px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Exit")}
          ></Exit>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(18,18,18,1)"
        {...getOverrideProps(overrides, "Terminal-Body")}
      >
        <Text
          fontFamily="Ubuntu Mono"
          fontSize="34px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
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
          children='Hello, World!&#xD;&#xA;I am Israel Banez and I have recently graduated from&#xD;&#xA;Cal Poly SLO, completing a bachelors degree in computer science.&#xD;&#xA;I am passionate about Software Engineering and am constantly expanding&#xD;&#xA;my skill sets to become a more well-rounded engineer.&#xD;&#xA;&#xD;&#xA;Although I lack professional experience, I have developed transferable skills&#xD;&#xA;and behaviors that will enable me to effectively adapt to ever changing work place.&#xA;I value personal growth and hope I can continue to learn and gain as much &#xA;experience&#xD;throughout my professional development.&#xD;&#xA;&#xD;&#xA;The following sections will demonstrate the skills and experience&#xD;&#xA;I have developed over time.&#xA;&#xA;Note: Click "add" or "drop-down" button for resume.&#xA;~&#xA;"about.txt" 14L, 691C                                                      14,51     ALL'
          {...getOverrideProps(
            overrides,
            'Hello, World! I am Israel Banez and I have recently graduated from Cal Poly SLO, completing a bachelors degree in computer science. I am passion about Software Engineering and am constantly expanding my skill sets to become a more well-rounded engineer. Although I lack professional experience, I have developed transferable skills and behaviors that will enable me to effectively adapt to ever changing work place. I value personal growth and hope I can continue to learn and gain as much experience throughout my professional development. The following sections will demonstrate the skills and experience I have developed over time. Note: Click "add" or "drop-down" button for resume. ~ "about.txt" 14L, 694C 14,51 ALL'
          )}
        ></Text>
        <View
          width="209px"
          height="36px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,0.47)"
          {...getOverrideProps(overrides, "Highlighter")}
        ></View>
      </Flex>
    </Flex>
  );
}
