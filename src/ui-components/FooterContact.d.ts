/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterContactOverridesProps = {
    FooterContact?: PrimitiveOverrideProps<FlexProps>;
    Directories12391?: PrimitiveOverrideProps<FlexProps>;
    "/home12392"?: PrimitiveOverrideProps<TextProps>;
    "/home124210"?: PrimitiveOverrideProps<TextProps>;
    Directories124105?: PrimitiveOverrideProps<FlexProps>;
    "/home124106"?: PrimitiveOverrideProps<TextProps>;
    "/home12397"?: PrimitiveOverrideProps<TextProps>;
    Directories124162?: PrimitiveOverrideProps<FlexProps>;
    "/home124163"?: PrimitiveOverrideProps<TextProps>;
    "/home124164"?: PrimitiveOverrideProps<TextProps>;
    "/home124176"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterContactProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterContactOverridesProps | undefined | null;
}>;
export default function FooterContact(props: FooterContactProps): React.ReactElement;
