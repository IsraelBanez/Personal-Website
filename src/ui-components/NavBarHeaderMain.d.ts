/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { MidRegionProps } from "./MidRegion";
import { MenuProps } from "./Menu";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderMainOverridesProps = {
    NavBarHeaderMain?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "Mid Region"?: MidRegionProps;
    "Right Region"?: PrimitiveOverrideProps<FlexProps>;
    Menu?: MenuProps;
} & EscapeHatchProps;
export declare type NavBarHeaderMainProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderMainOverridesProps | undefined | null;
}>;
export default function NavBarHeaderMain(props: NavBarHeaderMainProps): React.ReactElement;
