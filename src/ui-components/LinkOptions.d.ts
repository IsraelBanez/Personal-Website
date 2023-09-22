/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinkOptionsOverridesProps = {
    LinkOptions?: PrimitiveOverrideProps<FlexProps>;
    "Git-Button"?: PrimitiveOverrideProps<FlexProps>;
    Github?: PrimitiveOverrideProps<TextProps>;
    Dividor?: PrimitiveOverrideProps<IconProps>;
    "Web-Button"?: PrimitiveOverrideProps<FlexProps>;
    Weblink?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LinkOptionsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LinkOptionsOverridesProps | undefined | null;
}>;
export default function LinkOptions(props: LinkOptionsProps): React.ReactElement;
