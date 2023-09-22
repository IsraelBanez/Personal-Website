/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Exitsmaller from "./Exitsmaller";
export default function Title(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="371px"
      height="82px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Title")}
      {...rest}
    >
      <View
        width="20px"
        height="17px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="79.27%"
        bottom="0%"
        left="0%"
        right="94.61%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(18,18,18,1)"
        {...getOverrideProps(overrides, "Inverted-curve217122")}
      >
        <View
          width="20px"
          height="17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="0px 0px 25px 0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(50,53,60,1)"
          {...getOverrideProps(overrides, "Rectangle 1217123")}
        ></View>
      </View>
      <View
        width="331px"
        height="82px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="5.39%"
        right="5.39%"
        borderRadius="15px 15px 0px 0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(18,18,18,1)"
        {...getOverrideProps(overrides, "Title-Inside")}
      >
        <Exitsmaller
          width="25px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 12.5px - 0.5px)"
          left="285px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Exit-smaller")}
        ></Exitsmaller>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="calc(50% - 22px - 0px)"
          left="20px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Name-Container")}
        >
          <Text
            fontFamily="Ubuntu Mono"
            fontSize="32px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
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
            children="about"
            {...getOverrideProps(overrides, "about")}
          ></Text>
        </Flex>
      </View>
      <View
        width="20px"
        height="17px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="79.27%"
        bottom="0%"
        left="94.61%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(18,18,18,1)"
        {...getOverrideProps(overrides, "Inverted-curve217128")}
      >
        <View
          width="20px"
          height="17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="0px 0px 0px 25px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(50,53,60,1)"
          {...getOverrideProps(overrides, "Rectangle 1217129")}
        ></View>
      </View>
    </View>
  );
}
