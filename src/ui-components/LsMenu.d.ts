/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LsMenuOverridesProps = {
    LsMenu?: PrimitiveOverrideProps<FlexProps>;
    "Ls-Slot217375"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Ls-Slot217385"?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "Ls-Slot217391"?: PrimitiveOverrideProps<FlexProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    "Ls-Slot217399"?: PrimitiveOverrideProps<FlexProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LsMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LsMenuOverridesProps | undefined | null;
}>;
export default function LsMenu(props: LsMenuProps): React.ReactElement;
