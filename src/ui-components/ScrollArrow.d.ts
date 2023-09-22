/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SAContainerProps } from "./SAContainer";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScrollArrowOverridesProps = {
    ScrollArrow?: PrimitiveOverrideProps<ViewProps>;
    "SA-Container"?: SAContainerProps;
} & EscapeHatchProps;
export declare type ScrollArrowProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ScrollArrowOverridesProps | undefined | null;
}>;
export default function ScrollArrow(props: ScrollArrowProps): React.ReactElement;
