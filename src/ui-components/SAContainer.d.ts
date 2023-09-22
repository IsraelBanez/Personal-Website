/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SAContainerOverridesProps = {
    SAContainer?: PrimitiveOverrideProps<ViewProps>;
    "Polygon 2"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 3"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SAContainerProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SAContainerOverridesProps | undefined | null;
}>;
export default function SAContainer(props: SAContainerProps): React.ReactElement;
