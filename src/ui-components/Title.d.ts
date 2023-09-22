/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ExitsmallerProps } from "./Exitsmaller";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TitleOverridesProps = {
    Title?: PrimitiveOverrideProps<ViewProps>;
    "Inverted-curve217122"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1217123"?: PrimitiveOverrideProps<ViewProps>;
    "Title-Inside"?: PrimitiveOverrideProps<ViewProps>;
    "Exit-smaller"?: ExitsmallerProps;
    "Name-Container"?: PrimitiveOverrideProps<FlexProps>;
    about?: PrimitiveOverrideProps<TextProps>;
    "Inverted-curve217128"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1217129"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TitleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TitleOverridesProps | undefined | null;
}>;
export default function Title(props: TitleProps): React.ReactElement;
