import React from 'react';
import './Button.css';

/**
 * Renders a link when given `href`, a non-interactive span when `as="span"`
 * (for use inside another link), and a button otherwise.
 */
const Button = ({ children, variant = 'primary', className = '', href, as, ...rest }) => {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return <a href={href} className={classes} {...rest}>{children}</a>;
  }

  if (as === 'span') {
    return <span className={classes} {...rest}>{children}</span>;
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
