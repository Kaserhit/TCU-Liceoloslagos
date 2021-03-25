import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames('footer-social', className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>Redes Sociales:</li>
        <li>
          <a href="https://www.facebook.com/LiceoLosLagosHeredia">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <title>Facebook</title>
              <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
