import React from 'react';
import styles from './Button.module.scss';

const SIZE_MAP = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const Button = ({
  type = 'main',
  size = 'medium',
  href = '',
  onClick,
  disabled = false,
  title = '',
  children,
  ...rest
}) => {
  const classNames = [
    styles.button,
    styles[type],
    SIZE_MAP[size] || SIZE_MAP.medium,
    disabled && styles.disabled
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        title={title}
        {...rest}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      title={title}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
