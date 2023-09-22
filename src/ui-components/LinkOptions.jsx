/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function LinkOptions(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 15px rgba(0.44999998807907104, 0.7689999938011169, 1, 0.7099999785423279)"
      borderRadius="15px"
      padding="5px 5px 5px 5px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LinkOptions")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="4px 1px 4px 1px"
        {...getOverrideProps(overrides, "Git-Button")}
      >
        <Text
          fontFamily="Ubuntu Mono"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          children="Github"
          {...getOverrideProps(overrides, "Github")}
        ></Text>
      </Flex>
      <Icon
        width="30px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1, height: 30 }}
        paths={[
          {
            d: "M0 -0.25C-0.138071 -0.25 -0.25 -0.138071 -0.25 0C-0.25 0.138071 -0.138071 0.25 0 0.25L0 -0.25ZM30 0.25C30.1381 0.25 30.25 0.138071 30.25 0C30.25 -0.138071 30.1381 -0.25 30 -0.25L30 0.25ZM0 0.25L30 0.25L30 -0.25L0 -0.25L0 0.25Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 0,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Dividor")}
      ></Icon>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="4px 1px 4px 1px"
        {...getOverrideProps(overrides, "Web-Button")}
      >
        <Text
          fontFamily="Ubuntu Mono"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          children="Weblink"
          {...getOverrideProps(overrides, "Weblink")}
        ></Text>
      </Flex>
    </Flex>
  );
}
