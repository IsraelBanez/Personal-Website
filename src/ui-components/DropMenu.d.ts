/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DropSlotProps } from "./DropSlot";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DropMenuOverridesProps = {
    DropMenu?: PrimitiveOverrideProps<FlexProps>;
    "Drop-Slot217343"?: DropSlotProps;
    "Drop-Slot217345"?: DropSlotProps;
} & EscapeHatchProps;
export declare type DropMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DropMenuOverridesProps | undefined | null;
}>;
export default function DropMenu(props: DropMenuProps): React.ReactElement;
