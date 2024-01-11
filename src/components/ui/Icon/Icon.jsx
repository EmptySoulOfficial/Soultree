import React from "react";
import Icons from '../../../assets/svg/Icons/Icons.svg';
import PropTypes from 'prop-types';

const Icon = ({ name, color, size, iconClass }) => (
    <svg className={`icon icon-${name} ${iconClass}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );

  Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    iconClass: PropTypes.string
  };

  export default Icon;
