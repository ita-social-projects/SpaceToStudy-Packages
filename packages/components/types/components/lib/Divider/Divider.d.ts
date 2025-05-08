import React from "react";
import "./Divider.scss";
declare const variants: readonly ["fullWidth", "inset", "middle"];
declare const orientation: readonly ["vertical", "horizontal"];
declare const thickness: readonly ["sm", "md", "lg"];
declare const textAlign: readonly ["left", "right", "center"];
declare const type: readonly ["ellipse", "linear"];
declare const size: readonly ["small", "large"];
type DividerProps = {
    variant: (typeof variants)[number];
    orientation: (typeof orientation)[number];
    thickness: (typeof thickness)[number];
    textAlign: (typeof textAlign)[number];
    caption: string;
    type: (typeof type)[number];
    size?: (typeof size)[number];
};
declare const DividerComponent: React.FC<DividerProps>;
export default DividerComponent;
