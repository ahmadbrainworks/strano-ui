import { ReactNode } from "react";
export interface ContainerProps {
    background?: string;
    height?: string;
    width?: string;
    padding?: number;
    children?: ReactNode;
    className?: string;
}
export declare function Container({ background, padding, children, className, ...props }: ContainerProps): any;
//# sourceMappingURL=container.d.ts.map