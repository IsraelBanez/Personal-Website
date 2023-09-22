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
export declare type ProjectTerminalOverridesProps = {
    ProjectTerminal?: PrimitiveOverrideProps<FlexProps>;
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
    "random-user:~/Projects$ cat projects.txt Below display a list of several featured projects I have personally developed or collaborated with others on. Note: For more projects, click the \u201Cdrop-down\u201D button, to access the feature projects below click the hyperlink. random-user:~/Projects$ ls -l total 0 drwxr-xr-x 1 israel-banez cool-group 4096 Jul 06 2023 WiredIn drwxr-xr-x 1 israel-banez cool-group 4096 Jun 19 2023 GadLink drwxr-xr-x 1 israel-banez cool-group 4096 Jul 18 2023 TradeEconomic"?: PrimitiveOverrideProps<TextProps>;
    Highlighter?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ProjectTerminalProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProjectTerminalOverridesProps | undefined | null;
}>;
export default function ProjectTerminal(props: ProjectTerminalProps): React.ReactElement;
