/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/MidRegion.css';
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MidRegion(props) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);

  /*When Directories are clicked, they change color */
  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link)
  };
  const isLinkActive = (link) => {
    return link === activeLink;
  };
  
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="950px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="5px 0px 5px 0px"
      {...getOverrideProps(overrides, "MidRegion")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="row"
        width="96px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Directories10668")}
      >
        <Text
          className={isLinkActive("/home") ? "active" : "regular"}
          onClick={() => handleLinkClick("/home")}
          fontFamily="Ubuntu Mono"
          fontSize="20px"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="/home"
          {...getOverrideProps(overrides, "/home")}
        ></Text>
      </Flex>
      <Flex
        gap="5px"
        direction="row"
        width="96px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Directories10670")}
      >
        <Text
          className={isLinkActive("/about") ? "active" : "regular"}
          onClick={() => handleLinkClick("/about")}
          fontFamily="Ubuntu Mono"
          fontSize="20px"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="/about"
          {...getOverrideProps(overrides, "/about")}
        ></Text>
      </Flex>
      <Flex
        gap="5px"
        direction="row"
        width="96px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Directories10672")}
      >
        <Text
          className={isLinkActive("/projects") ? "active" : "regular"}
          onClick={() => handleLinkClick("/projects")}
          fontFamily="Ubuntu Mono"
          fontSize="20px"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="/projects"
          {...getOverrideProps(overrides, "/project")}
        ></Text>
      </Flex>
      <Flex
        gap="5px"
        direction="row"
        width="96px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Directories10674")}
      >
        <Text
          className={isLinkActive("/contact") ? "active" : "regular"}
          onClick={() => handleLinkClick("/contact")}
          fontFamily="Ubuntu Mono"
          fontSize="20px"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="/contact"
          {...getOverrideProps(overrides, "/contact")}
        ></Text>
      </Flex>
    </Flex>
  );
}
