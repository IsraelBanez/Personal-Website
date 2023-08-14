/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MidRegionOverridesProps = {
    MidRegion?: PrimitiveOverrideProps<FlexProps>;
    Directories10668?: PrimitiveOverrideProps<FlexProps>;
    "/home"?: PrimitiveOverrideProps<TextProps>;
    Directories10670?: PrimitiveOverrideProps<FlexProps>;
    "/about"?: PrimitiveOverrideProps<TextProps>;
    Directories10672?: PrimitiveOverrideProps<FlexProps>;
    "/project"?: PrimitiveOverrideProps<TextProps>;
    Directories10674?: PrimitiveOverrideProps<FlexProps>;
    "/contact"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MidRegionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MidRegionOverridesProps | undefined | null;
}>;
export default function MidRegion(props: MidRegionProps): React.ReactElement;
