import React from 'react';
import { getBEM } from '../../utils/bem.util';
import './Button.scss';

type IconType = React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>;
type ButtonType = HTMLButtonElement;

export interface ButtonProps<T extends ButtonType>
  extends React.ButtonHTMLAttributes<T> {
  className?: string;
  icon?: IconType;
  leadingIcon?: IconType;
}

const renderIcon = (icon?: IconType): JSX.Element | null => {
  const { bem } = getBEM('icon');

  if (!icon) {
    return null;
  }

  return React.cloneElement(icon, {
    className: bem(null, [icon.props.className]),
  });
};

const Button = <T extends ButtonType>({
  icon,
  children,
  className = '',
  leadingIcon,
  ...restProps
}: ButtonProps<T>): JSX.Element => {
  const { bem } = getBEM('button');

  const buttonProps = { ...restProps, className: bem(null, [className]) };

  return (
    <button {...buttonProps}>
      {renderIcon(leadingIcon)}
      <span className={bem('label')}>{children}</span>
      {renderIcon(icon)}
    </button>
  );
};

export default Button;
