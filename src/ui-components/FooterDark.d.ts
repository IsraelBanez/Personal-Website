/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FooterContactProps } from "./FooterContact";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterDarkOverridesProps = {
    FooterDark?: PrimitiveOverrideProps<FlexProps>;
    FooterContact?: FooterContactProps;
} & EscapeHatchProps;
export declare type FooterDarkProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterDarkOverridesProps | undefined | null;
}>;
export default function FooterDark(props: FooterDarkProps): React.ReactElement;
