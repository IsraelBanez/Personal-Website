/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DirectoriesOverridesProps = {
    Directories?: PrimitiveOverrideProps<FlexProps>;
    "/Dir"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DirectoriesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DirectoriesOverridesProps | undefined | null;
}>;
export default function Directories(props: DirectoriesProps): React.ReactElement;
