import type { ReactNode } from "@tanstack/react-router";

export interface ButtonProps {
    onClickFn: () => void;
    children: ReactNode;
    disabled?: boolean;
}