import { default as React } from '../../../node_modules/react';
type IconType = React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>;
type ButtonType = HTMLButtonElement;
export interface ButtonProps<T extends ButtonType> extends React.ButtonHTMLAttributes<T> {
    className?: string;
    icon?: IconType;
    leadingIcon?: IconType;
}
declare const Button: <T extends ButtonType>({ icon, children, className, leadingIcon, ...restProps }: ButtonProps<T>) => JSX.Element;
export default Button;
