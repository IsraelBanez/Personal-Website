/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TitleProps } from "./Title";
import { AddProps } from "./Add";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { DropDownProps } from "./DropDown";
import { ResizeProps } from "./Resize";
import { FullsizeProps } from "./Fullsize";
import { ExitProps } from "./Exit";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutTerminalOverridesProps = {
    AboutTerminal?: PrimitiveOverrideProps<FlexProps>;
    "Terminal-Header"?: PrimitiveOverrideProps<FlexProps>;
    "Title-Container"?: PrimitiveOverrideProps<FlexProps>;
    Title?: TitleProps;
    "Expand-Option"?: PrimitiveOverrideProps<FlexProps>;
    Add?: AddProps;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Drop-Down"?: DropDownProps;
    "Options-Container"?: PrimitiveOverrideProps<FlexProps>;
    Resize?: ResizeProps;
    Fullsize?: FullsizeProps;
    Exit?: ExitProps;
    "Terminal-Body"?: PrimitiveOverrideProps<FlexProps>;
    "Hello, World! I am Israel Banez and I have recently graduated from Cal Poly SLO, completing a bachelors degree in computer science. I am passion about Software Engineering and am constantly expanding my skill sets to become a more well-rounded engineer. Although I lack professional experience, I have developed transferable skills and behaviors that will enable me to effectively adapt to ever changing work place. I value personal growth and hope I can continue to learn and gain as much experience throughout my professional development. The following sections will demonstrate the skills and experience I have developed over time. Note: Click \"add\" or \"drop-down\" button for resume. ~ \"about.txt\" 14L, 691C 14,51 ALL"?: PrimitiveOverrideProps<TextProps>;
    Highlighter?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type AboutTerminalProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AboutTerminalOverridesProps | undefined | null;
}>;
export default function AboutTerminal(props: AboutTerminalProps): React.ReactElement;
