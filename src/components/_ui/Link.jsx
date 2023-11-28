import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const Link = ({ className, children, href, ...restProps }) => {
  return (
    <a  className={styles[className]} href={href} {...restProps}>
     {children}
    </a>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;